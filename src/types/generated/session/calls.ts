import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const setKeys =  {
    name: 'Session.set_keys',
    /**
     * See [`Pallet::set_keys`].
     */
    peoplePolkadotV1002006: new CallType(
        'Session.set_keys',
        sts.struct({
            keys: peoplePolkadotV1002006.SessionKeys,
            proof: sts.bytes(),
        })
    ),
}

export const purgeKeys =  {
    name: 'Session.purge_keys',
    /**
     * See [`Pallet::purge_keys`].
     */
    peoplePolkadotV1002006: new CallType(
        'Session.purge_keys',
        sts.unit()
    ),
}
