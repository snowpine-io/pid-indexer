import {CallNotDefinedError, UnknownVersionError} from '../../../common/errors'
import {calls, events} from '../../../types/generated'
import {Identity, Network} from '../../../model'
import {BlockHeader, CallItem, CommonContext, EventItem} from '../../types/contexts'
import {getOrCreateAccount, unwrapData} from "../../util/entities";

function getEventData(event: EventItem) {
    if (events.identity.identitySet.peoplePolkadotV1002006.is(event)) {
        return events.identity.identitySet.peoplePolkadotV1002006.decode(event)
    }
    throw new UnknownVersionError(events.identity.identitySet.name)
}

function getCallData(call: CallItem) {
    if (calls.identity.setIdentity.peoplePolkadotV1002006.is(call)) {
        return calls.identity.setIdentity.peoplePolkadotV1002006.decode(call)
    }
    throw new UnknownVersionError(calls.identity.setIdentity.name)
}

export async function identitySet(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<undefined> {
    if (!item.call) throw new CallNotDefinedError()

    const eventData = getEventData(item)
    const callData = getCallData(item.call)

    const account = await getOrCreateAccount(ctx, eventData.who)
    const identity = new Identity({
        id: account.id,
        network: Network.Polkadot,
        account: account,
        display: unwrapData(callData.info.display),
        legal: unwrapData(callData.info.legal),
        web: unwrapData(callData.info.web),
        matrix: unwrapData(callData.info.matrix),
        email: unwrapData(callData.info.email),
        twitter: unwrapData(callData.info.twitter),
        image: unwrapData(callData.info.image),
        pgpFingerprint: callData.info.pgpFingerprint,
        github: unwrapData(callData.info.github),
        discord: unwrapData(callData.info.discord),
        createdAt : new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(identity)

    return undefined
}
