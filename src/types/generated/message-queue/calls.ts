import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const reapPage =  {
    name: 'MessageQueue.reap_page',
    /**
     * See [`Pallet::reap_page`].
     */
    peoplePolkadotV1002006: new CallType(
        'MessageQueue.reap_page',
        sts.struct({
            messageOrigin: peoplePolkadotV1002006.AggregateMessageOrigin,
            pageIndex: sts.number(),
        })
    ),
}

export const executeOverweight =  {
    name: 'MessageQueue.execute_overweight',
    /**
     * See [`Pallet::execute_overweight`].
     */
    peoplePolkadotV1002006: new CallType(
        'MessageQueue.execute_overweight',
        sts.struct({
            messageOrigin: peoplePolkadotV1002006.AggregateMessageOrigin,
            page: sts.number(),
            index: sts.number(),
            weightLimit: peoplePolkadotV1002006.Weight,
        })
    ),
}
