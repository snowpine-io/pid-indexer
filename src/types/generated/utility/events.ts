import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const batchInterrupted =  {
    name: 'Utility.BatchInterrupted',
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    peoplePolkadotV1002006: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: peoplePolkadotV1002006.DispatchError,
        })
    ),
}

export const batchCompleted =  {
    name: 'Utility.BatchCompleted',
    /**
     * Batch of dispatches completed fully with no error.
     */
    peoplePolkadotV1002006: new EventType(
        'Utility.BatchCompleted',
        sts.unit()
    ),
}

export const batchCompletedWithErrors =  {
    name: 'Utility.BatchCompletedWithErrors',
    /**
     * Batch of dispatches completed but has errors.
     */
    peoplePolkadotV1002006: new EventType(
        'Utility.BatchCompletedWithErrors',
        sts.unit()
    ),
}

export const itemCompleted =  {
    name: 'Utility.ItemCompleted',
    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    peoplePolkadotV1002006: new EventType(
        'Utility.ItemCompleted',
        sts.unit()
    ),
}

export const itemFailed =  {
    name: 'Utility.ItemFailed',
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    peoplePolkadotV1002006: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: peoplePolkadotV1002006.DispatchError,
        })
    ),
}

export const dispatchedAs =  {
    name: 'Utility.DispatchedAs',
    /**
     * A call was dispatched.
     */
    peoplePolkadotV1002006: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => peoplePolkadotV1002006.DispatchError),
        })
    ),
}
