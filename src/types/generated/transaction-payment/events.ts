import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const transactionFeePaid =  {
    name: 'TransactionPayment.TransactionFeePaid',
    /**
     * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
     * has been paid by `who`.
     */
    peoplePolkadotV1002006: new EventType(
        'TransactionPayment.TransactionFeePaid',
        sts.struct({
            who: peoplePolkadotV1002006.AccountId32,
            actualFee: sts.bigint(),
            tip: sts.bigint(),
        })
    ),
}
