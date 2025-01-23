import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1002000 from '../v1002000'
import * as v1002004 from '../v1002004'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'
import * as v1002006 from '../v1002006'
import * as peoplePolkadotV1003000 from '../peoplePolkadotV1003000'
import * as v1003000 from '../v1003000'

export const batch =  {
    name: 'Utility.batch',
    /**
     * See [`Pallet::batch`].
     */
    peoplePolkadotV1002006: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => peoplePolkadotV1002006.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    peoplePolkadotV1003000: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => peoplePolkadotV1003000.Call),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    v1002000: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1002000.Call),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    v1002004: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1002004.Call),
        })
    ),
    /**
     * See [`Pallet::batch`].
     */
    v1002006: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1002006.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    v1003000: new CallType(
        'Utility.batch',
        sts.struct({
            calls: sts.array(() => v1003000.Call),
        })
    ),
}

export const asDerivative =  {
    name: 'Utility.as_derivative',
    /**
     * See [`Pallet::as_derivative`].
     */
    peoplePolkadotV1002006: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: peoplePolkadotV1002006.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    peoplePolkadotV1003000: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: peoplePolkadotV1003000.Call,
        })
    ),
    /**
     * See [`Pallet::as_derivative`].
     */
    v1002000: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1002000.Call,
        })
    ),
    /**
     * See [`Pallet::as_derivative`].
     */
    v1002004: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1002004.Call,
        })
    ),
    /**
     * See [`Pallet::as_derivative`].
     */
    v1002006: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1002006.Call,
        })
    ),
    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    v1003000: new CallType(
        'Utility.as_derivative',
        sts.struct({
            index: sts.number(),
            call: v1003000.Call,
        })
    ),
}

export const batchAll =  {
    name: 'Utility.batch_all',
    /**
     * See [`Pallet::batch_all`].
     */
    peoplePolkadotV1002006: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => peoplePolkadotV1002006.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    peoplePolkadotV1003000: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => peoplePolkadotV1003000.Call),
        })
    ),
    /**
     * See [`Pallet::batch_all`].
     */
    v1002000: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1002000.Call),
        })
    ),
    /**
     * See [`Pallet::batch_all`].
     */
    v1002004: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1002004.Call),
        })
    ),
    /**
     * See [`Pallet::batch_all`].
     */
    v1002006: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1002006.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v1003000: new CallType(
        'Utility.batch_all',
        sts.struct({
            calls: sts.array(() => v1003000.Call),
        })
    ),
}

export const dispatchAs =  {
    name: 'Utility.dispatch_as',
    /**
     * See [`Pallet::dispatch_as`].
     */
    peoplePolkadotV1002006: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: peoplePolkadotV1002006.OriginCaller,
            call: peoplePolkadotV1002006.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    peoplePolkadotV1003000: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: peoplePolkadotV1003000.OriginCaller,
            call: peoplePolkadotV1003000.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_as`].
     */
    v1002000: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1002000.OriginCaller,
            call: v1002000.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_as`].
     */
    v1002004: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1002004.OriginCaller,
            call: v1002004.Call,
        })
    ),
    /**
     * See [`Pallet::dispatch_as`].
     */
    v1002006: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1002006.OriginCaller,
            call: v1002006.Call,
        })
    ),
    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    v1003000: new CallType(
        'Utility.dispatch_as',
        sts.struct({
            asOrigin: v1003000.OriginCaller,
            call: v1003000.Call,
        })
    ),
}

export const forceBatch =  {
    name: 'Utility.force_batch',
    /**
     * See [`Pallet::force_batch`].
     */
    peoplePolkadotV1002006: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => peoplePolkadotV1002006.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    peoplePolkadotV1003000: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => peoplePolkadotV1003000.Call),
        })
    ),
    /**
     * See [`Pallet::force_batch`].
     */
    v1002000: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1002000.Call),
        })
    ),
    /**
     * See [`Pallet::force_batch`].
     */
    v1002004: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1002004.Call),
        })
    ),
    /**
     * See [`Pallet::force_batch`].
     */
    v1002006: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1002006.Call),
        })
    ),
    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    v1003000: new CallType(
        'Utility.force_batch',
        sts.struct({
            calls: sts.array(() => v1003000.Call),
        })
    ),
}

export const withWeight =  {
    name: 'Utility.with_weight',
    /**
     * See [`Pallet::with_weight`].
     */
    peoplePolkadotV1002006: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: peoplePolkadotV1002006.Call,
            weight: peoplePolkadotV1002006.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    peoplePolkadotV1003000: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: peoplePolkadotV1003000.Call,
            weight: peoplePolkadotV1003000.Weight,
        })
    ),
    /**
     * See [`Pallet::with_weight`].
     */
    v1002000: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1002000.Call,
            weight: v1002000.Weight,
        })
    ),
    /**
     * See [`Pallet::with_weight`].
     */
    v1002004: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1002004.Call,
            weight: v1002004.Weight,
        })
    ),
    /**
     * See [`Pallet::with_weight`].
     */
    v1002006: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1002006.Call,
            weight: v1002006.Weight,
        })
    ),
    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    v1003000: new CallType(
        'Utility.with_weight',
        sts.struct({
            call: v1003000.Call,
            weight: v1003000.Weight,
        })
    ),
}
