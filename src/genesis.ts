import { BlockHeader, CommonContext } from './mappings/types/contexts'
import { identity } from './types/generated/storage'
import {UnknownVersionError} from "./common/errors";
import chunk from 'lodash/chunk'
import {Identity, Network, Registrar, SubIdentity} from "./model";
import {getOrCreateAccount, unwrapData} from "./mappings/util/entities";

const storageKeySet = new Set<string>()

export const addStorageKeyToSet = (keys: string[]) => {
    keys.forEach((id) => storageKeySet.add(id))
}

async function getIdentityStorage(ctx: CommonContext, block: BlockHeader, keys: string[]) {
    if (identity.identityOf.peoplePolkadotV1002006.is(block)) {
        return identity.identityOf.peoplePolkadotV1002006.getMany(block, keys)
    }
    throw new UnknownVersionError('identity.identityOf')
}

export async function saveIdentities(ctx: CommonContext, block: BlockHeader) {
    const keys = Array.from(storageKeySet)
    if (keys.length === 0) return

    let totalIdentities = 0;

    for (const chunked of chunk(keys, 100)) {
        const storage = await getIdentityStorage(ctx, block, chunked)
        if (storage === undefined || storage.length === 0) {
            continue
        }

        const identities: any[] = []
        // const accounts: any[] = []

        for (let i = 0; i < chunked.length; i += 1) {
            const id = chunked[i]
            const identity = storage[i]
            if (identity === undefined || typeof identity === 'string') {
                continue
            }

            const account = await getOrCreateAccount(ctx, id)
            const [registration, _] = identity
            const identityInfo = registration.info

            // accounts.push(account.id)
            identities.push(new Identity({
                id: account.id,
                network: Network.Polkadot,
                account: account,
                display: unwrapData(identityInfo.display),
                legal: unwrapData(identityInfo.legal),
                web: unwrapData(identityInfo.web),
                matrix: unwrapData(identityInfo.matrix),
                email: unwrapData(identityInfo.email),
                twitter: unwrapData(identityInfo.twitter),
                image: unwrapData(identityInfo.image),
                pgpFingerprint: identityInfo.pgpFingerprint,
                github: unwrapData(identityInfo.github),
                discord: unwrapData(identityInfo.discord),
                createdAt : new Date(block.timestamp ?? 0),
            }));
        }

        totalIdentities += identities.length;
        await ctx.store.upsert(identities)
    }

    ctx.log.info(`Found ${totalIdentities} identities at genesis`)
    storageKeySet.clear()
}

export async function getIdentities(ctx: CommonContext, block: BlockHeader) {
    const getStorage = () => {
        if (identity.identityOf.peoplePolkadotV1002006.is(block)) {
            return identity.identityOf.peoplePolkadotV1002006
        }
        throw new Error('Unknown storage version')
    }

    for await (const keys of getStorage().getKeysPaged(1000, block)) {
        addStorageKeyToSet(keys)
        await saveIdentities(ctx, block)
    }
}

async function getSubIdentityStorage(ctx: CommonContext, block: BlockHeader, keys: string[]) {
    if (identity.superOf.peoplePolkadotV1002006.is(block)) {
        return identity.superOf.peoplePolkadotV1002006.getMany(block, keys)
    }
    throw new UnknownVersionError('identity.superOf')
}

export async function saveSubIdentities(ctx: CommonContext, block: BlockHeader) {
    const keys = Array.from(storageKeySet)
    if (keys.length === 0) return

    for (const chunked of chunk(keys, 100)) {
        const storage = await getSubIdentityStorage(ctx, block, chunked)
        if (storage === undefined || storage.length === 0) {
            continue
        }

        const subIdentities: any[] = []

        for (let i = 0; i < chunked.length; i += 1) {
            const id = chunked[i]
            const subIdentity = storage[i]
            if (subIdentity === undefined) {
                continue
            }

            const [superIdentity, data] = subIdentity
            const subAccount = await getOrCreateAccount(ctx, id)
            const superAccount = await getOrCreateAccount(ctx, superIdentity)
            const identity = await ctx.store.findOneBy(Identity, {
                account: superAccount
            })

            if (!identity) {
                throw new Error('Super account has no identity')
            }

            subIdentities.push(new SubIdentity({
                id: `${subAccount.id}`,
                identity: identity,
                name: unwrapData(data),
                account: subAccount,
                createdAt: new Date(block.timestamp ?? 0),
            }))
        }

        await ctx.store.upsert(subIdentities)
    }

    storageKeySet.clear()
}

export async function getSubIdentities(ctx: CommonContext, block: BlockHeader) {
    const getStorage = () => {
        if (identity.superOf.peoplePolkadotV1002006.is(block)) {
            return identity.superOf.peoplePolkadotV1002006
        }
        throw new Error('Unknown storage version')
    }

    for await (const keys of getStorage().getKeysPaged(1000, block)) {
        addStorageKeyToSet(keys)
        await saveSubIdentities(ctx, block)
    }
}

export async function getRegistrars(ctx: CommonContext, block: BlockHeader) {
    const getStorage = () => {
        if (identity.registrars.peoplePolkadotV1002006.is(block)) {
            return identity.registrars.peoplePolkadotV1002006
        }
        throw new Error('Unknown storage version')
    }

    const storage = await getStorage().get(block)
    if (storage === undefined || storage.length === 0) {
        ctx.log.info('No registrars found at genesis')
        return
    }

    ctx.log.info(`Found ${storage.length} registrars at genesis`)

    const registrars: any[] = [];

    for (let i = 0; i < storage.length; i += 1) {
        const registrar = storage[i]
        if (registrar === undefined) {
            continue
        }

        const account = await getOrCreateAccount(ctx, registrar.account)
        registrars.push(new Registrar({
            id: account.id,
            index: i,
            account: account,
            identity: account.identity,
            fee: registrar.fee,
            fields: registrar.fields,
            createdAt: new Date(block.timestamp ?? 0),
        }))
    }

    await ctx.store.upsert(registrars)
}