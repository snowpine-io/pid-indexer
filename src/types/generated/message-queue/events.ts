import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1002000 from '../v1002000'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'
import * as peoplePolkadotV1003000 from '../peoplePolkadotV1003000'
import * as v1003000 from '../v1003000'

export const processingFailed =  {
    name: 'MessageQueue.ProcessingFailed',
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    peoplePolkadotV1002006: new EventType(
        'MessageQueue.ProcessingFailed',
        sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: peoplePolkadotV1002006.H256,
            /**
             * The queue of the message.
             */
            origin: peoplePolkadotV1002006.AggregateMessageOrigin,
            /**
             * The error that occurred.
             * 
             * This error is pretty opaque. More fine-grained errors need to be emitted as events
             * by the `MessageProcessor`.
             */
            error: peoplePolkadotV1002006.ProcessMessageError,
        })
    ),
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    peoplePolkadotV1003000: new EventType(
        'MessageQueue.ProcessingFailed',
        sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: peoplePolkadotV1003000.H256,
            /**
             * The queue of the message.
             */
            origin: peoplePolkadotV1003000.AggregateMessageOrigin,
            /**
             * The error that occurred.
             * 
             * This error is pretty opaque. More fine-grained errors need to be emitted as events
             * by the `MessageProcessor`.
             */
            error: peoplePolkadotV1003000.ProcessMessageError,
        })
    ),
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    v1002000: new EventType(
        'MessageQueue.ProcessingFailed',
        sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: v1002000.H256,
            /**
             * The queue of the message.
             */
            origin: v1002000.AggregateMessageOrigin,
            /**
             * The error that occurred.
             * 
             * This error is pretty opaque. More fine-grained errors need to be emitted as events
             * by the `MessageProcessor`.
             */
            error: v1002000.ProcessMessageError,
        })
    ),
    /**
     * Message discarded due to an error in the `MessageProcessor` (usually a format error).
     */
    v1003000: new EventType(
        'MessageQueue.ProcessingFailed',
        sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: v1003000.H256,
            /**
             * The queue of the message.
             */
            origin: v1003000.AggregateMessageOrigin,
            /**
             * The error that occurred.
             * 
             * This error is pretty opaque. More fine-grained errors need to be emitted as events
             * by the `MessageProcessor`.
             */
            error: v1003000.ProcessMessageError,
        })
    ),
}

export const processed =  {
    name: 'MessageQueue.Processed',
    /**
     * Message is processed.
     */
    peoplePolkadotV1002006: new EventType(
        'MessageQueue.Processed',
        sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: peoplePolkadotV1002006.H256,
            /**
             * The queue of the message.
             */
            origin: peoplePolkadotV1002006.AggregateMessageOrigin,
            /**
             * How much weight was used to process the message.
             */
            weightUsed: peoplePolkadotV1002006.Weight,
            /**
             * Whether the message was processed.
             * 
             * Note that this does not mean that the underlying `MessageProcessor` was internally
             * successful. It *solely* means that the MQ pallet will treat this as a success
             * condition and discard the message. Any internal error needs to be emitted as events
             * by the `MessageProcessor`.
             */
            success: sts.boolean(),
        })
    ),
}

export const overweightEnqueued =  {
    name: 'MessageQueue.OverweightEnqueued',
    /**
     * Message placed in overweight queue.
     */
    peoplePolkadotV1002006: new EventType(
        'MessageQueue.OverweightEnqueued',
        sts.struct({
            /**
             * The `blake2_256` hash of the message.
             */
            id: sts.bytes(),
            /**
             * The queue of the message.
             */
            origin: peoplePolkadotV1002006.AggregateMessageOrigin,
            /**
             * The page of the message.
             */
            pageIndex: sts.number(),
            /**
             * The index of the message within the page.
             */
            messageIndex: sts.number(),
        })
    ),
}

export const pageReaped =  {
    name: 'MessageQueue.PageReaped',
    /**
     * This page was reaped.
     */
    peoplePolkadotV1002006: new EventType(
        'MessageQueue.PageReaped',
        sts.struct({
            /**
             * The queue of the page.
             */
            origin: peoplePolkadotV1002006.AggregateMessageOrigin,
            /**
             * The index of the page.
             */
            index: sts.number(),
        })
    ),
}
