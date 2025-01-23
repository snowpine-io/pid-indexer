import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const reapIdentity =  {
    name: 'IdentityMigrator.reap_identity',
    /**
     * See [`Pallet::reap_identity`].
     */
    peoplePolkadotV1002006: new CallType(
        'IdentityMigrator.reap_identity',
        sts.struct({
            who: peoplePolkadotV1002006.AccountId32,
        })
    ),
}

export const pokeDeposit =  {
    name: 'IdentityMigrator.poke_deposit',
    /**
     * See [`Pallet::poke_deposit`].
     */
    peoplePolkadotV1002006: new CallType(
        'IdentityMigrator.poke_deposit',
        sts.struct({
            who: peoplePolkadotV1002006.AccountId32,
        })
    ),
}
