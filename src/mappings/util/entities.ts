import {u8aToHex} from '@polkadot/util'
import {
    Account,
    BlakeTwo256,
    Data as DataModel,
    Keccak256,
    Network,
    Sha256,
    ShaThree256,
    Raw,
    JudgementType
} from '../../model'
import {CommonContext} from '../types/contexts'
import {encodeId, safeString} from '../../common/tools'
import {Data, Judgement, MultiAddress} from "../../types/generated/peoplePolkadotV1003000";

export const currentNetwork = (ctx: CommonContext) => {
    const spec = ctx.blocks[0].header.specName
    switch (spec) {
        case 'people-kusama':
        case 'kusama':
            return Network.Kusama
        case 'people-polkadot':
        case 'polkadot':
        default:
            return Network.Polkadot
    }
}

export async function getOrCreateAccount(ctx: CommonContext, publicKey: Uint8Array | string | MultiAddress) : Promise<Account> {
    let pkHex: string;

    if (publicKey instanceof Uint8Array) {
        pkHex = u8aToHex(publicKey)
    } else if (typeof publicKey === 'string') {
        pkHex = publicKey
    } else {
        switch (publicKey.__kind) {
            case 'Address20':
            case 'Address32':
            case 'Raw':
            case 'Id':
                pkHex = publicKey.value
                break;
            default:
                throw new Error('Unknown address type')
        }
    }

    let account = await ctx.store.findOneBy(Account, {
        id: pkHex,
    })

    if (!account) {
        account = new Account({
            id: `${currentNetwork(ctx).toLowerCase()}:${pkHex}`,
            network: Network.Polkadot,
            address: encodeId(pkHex),
            // balance: new Balance({
            //     transferable: 0n,
            //     free: 0n,
            //     reserved: 0n,
            //     frozen: 0n,
            // }),
            nonce: 0,
        })

        await ctx.store.save(account)
    }

    return account
}

export function getJudgementType(judgement: Judgement): JudgementType {
    switch (judgement.__kind) {
        case 'Erroneous':
            return JudgementType.Erroneous
        case 'FeePaid':
            return JudgementType.FeePaid
        case 'KnownGood':
            return JudgementType.KnownGood
        case 'LowQuality':
            return JudgementType.LowQuality
        case 'OutOfDate':
            return JudgementType.OutOfDate
        case 'Reasonable':
            return JudgementType.Reasonable
        case 'Unknown':
            return JudgementType.Unknown
    }
}

export function unwrapData(data: Data): DataModel | null {
    switch (data.__kind) {
        case 'None':
            return null
        case 'BlakeTwo256':
            return new BlakeTwo256({
                value: data.value
            })
        case 'Sha256':
            return new Sha256({
                value: data.value
            })
        case 'Keccak256':
            return new Keccak256({
                value: data.value
            })
        case 'ShaThree256':
            return new ShaThree256({
                value: data.value
            })
        default:
            return data.value == undefined ? null : new Raw({ value: safeString(Buffer.from(data.value.slice(2), 'hex').toString())  })
    }
}