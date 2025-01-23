import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const identityReaped =  {
    name: 'IdentityMigrator.IdentityReaped',
    /**
     * The identity and all sub accounts were reaped for `who`.
     */
    peoplePolkadotV1002006: new EventType(
        'IdentityMigrator.IdentityReaped',
        sts.struct({
            who: peoplePolkadotV1002006.AccountId32,
        })
    ),
}

export const depositUpdated =  {
    name: 'IdentityMigrator.DepositUpdated',
    /**
     * The deposits held for `who` were updated. `identity` is the new deposit held for
     * identity info, and `subs` is the new deposit held for the sub-accounts.
     */
    peoplePolkadotV1002006: new EventType(
        'IdentityMigrator.DepositUpdated',
        sts.struct({
            who: peoplePolkadotV1002006.AccountId32,
            identity: sts.bigint(),
            subs: sts.bigint(),
        })
    ),
}
