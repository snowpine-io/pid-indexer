import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const extrinsicSuccess =  {
    name: 'System.ExtrinsicSuccess',
    /**
     * An extrinsic completed successfully.
     */
    peoplePolkadotV1002006: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: peoplePolkadotV1002006.DispatchInfo,
        })
    ),
}

export const extrinsicFailed =  {
    name: 'System.ExtrinsicFailed',
    /**
     * An extrinsic failed.
     */
    peoplePolkadotV1002006: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: peoplePolkadotV1002006.DispatchError,
            dispatchInfo: peoplePolkadotV1002006.DispatchInfo,
        })
    ),
}

export const codeUpdated =  {
    name: 'System.CodeUpdated',
    /**
     * `:code` was updated.
     */
    peoplePolkadotV1002006: new EventType(
        'System.CodeUpdated',
        sts.unit()
    ),
}

export const newAccount =  {
    name: 'System.NewAccount',
    /**
     * A new account was created.
     */
    peoplePolkadotV1002006: new EventType(
        'System.NewAccount',
        sts.struct({
            account: peoplePolkadotV1002006.AccountId32,
        })
    ),
}

export const killedAccount =  {
    name: 'System.KilledAccount',
    /**
     * An account was reaped.
     */
    peoplePolkadotV1002006: new EventType(
        'System.KilledAccount',
        sts.struct({
            account: peoplePolkadotV1002006.AccountId32,
        })
    ),
}

export const remarked =  {
    name: 'System.Remarked',
    /**
     * On on-chain remark happened.
     */
    peoplePolkadotV1002006: new EventType(
        'System.Remarked',
        sts.struct({
            sender: peoplePolkadotV1002006.AccountId32,
            hash: peoplePolkadotV1002006.H256,
        })
    ),
}

export const upgradeAuthorized =  {
    name: 'System.UpgradeAuthorized',
    /**
     * An upgrade was authorized.
     */
    peoplePolkadotV1002006: new EventType(
        'System.UpgradeAuthorized',
        sts.struct({
            codeHash: peoplePolkadotV1002006.H256,
            checkVersion: sts.boolean(),
        })
    ),
}
