import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const set =  {
    name: 'Timestamp.set',
    /**
     * See [`Pallet::set`].
     */
    peoplePolkadotV1002006: new CallType(
        'Timestamp.set',
        sts.struct({
            now: sts.bigint(),
        })
    ),
}
