import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1002000 from '../v1002000'
import * as v1002004 from '../v1002004'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'
import * as v1002006 from '../v1002006'
import * as peoplePolkadotV1003000 from '../peoplePolkadotV1003000'
import * as v1003000 from '../v1003000'

export const asMultiThreshold1 =  {
    name: 'Multisig.as_multi_threshold_1',
    /**
     * See [`Pallet::as_multi_threshold_1`].
     */
    peoplePolkadotV1002006: new CallType(
        'Multisig.as_multi_threshold_1',
        sts.struct({
            otherSignatories: sts.array(() => peoplePolkadotV1002006.AccountId32),
            call: peoplePolkadotV1002006.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    peoplePolkadotV1003000: new CallType(
        'Multisig.as_multi_threshold_1',
        sts.struct({
            otherSignatories: sts.array(() => peoplePolkadotV1003000.AccountId32),
            call: peoplePolkadotV1003000.Call,
        })
    ),
    /**
     * See [`Pallet::as_multi_threshold_1`].
     */
    v1002000: new CallType(
        'Multisig.as_multi_threshold_1',
        sts.struct({
            otherSignatories: sts.array(() => v1002000.AccountId32),
            call: v1002000.Call,
        })
    ),
    /**
     * See [`Pallet::as_multi_threshold_1`].
     */
    v1002004: new CallType(
        'Multisig.as_multi_threshold_1',
        sts.struct({
            otherSignatories: sts.array(() => v1002004.AccountId32),
            call: v1002004.Call,
        })
    ),
    /**
     * See [`Pallet::as_multi_threshold_1`].
     */
    v1002006: new CallType(
        'Multisig.as_multi_threshold_1',
        sts.struct({
            otherSignatories: sts.array(() => v1002006.AccountId32),
            call: v1002006.Call,
        })
    ),
    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    v1003000: new CallType(
        'Multisig.as_multi_threshold_1',
        sts.struct({
            otherSignatories: sts.array(() => v1003000.AccountId32),
            call: v1003000.Call,
        })
    ),
}

export const asMulti =  {
    name: 'Multisig.as_multi',
    /**
     * See [`Pallet::as_multi`].
     */
    peoplePolkadotV1002006: new CallType(
        'Multisig.as_multi',
        sts.struct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => peoplePolkadotV1002006.AccountId32),
            maybeTimepoint: sts.option(() => peoplePolkadotV1002006.Timepoint),
            call: peoplePolkadotV1002006.Call,
            maxWeight: peoplePolkadotV1002006.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    peoplePolkadotV1003000: new CallType(
        'Multisig.as_multi',
        sts.struct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => peoplePolkadotV1003000.AccountId32),
            maybeTimepoint: sts.option(() => peoplePolkadotV1003000.Timepoint),
            call: peoplePolkadotV1003000.Call,
            maxWeight: peoplePolkadotV1003000.Weight,
        })
    ),
    /**
     * See [`Pallet::as_multi`].
     */
    v1002000: new CallType(
        'Multisig.as_multi',
        sts.struct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => v1002000.AccountId32),
            maybeTimepoint: sts.option(() => v1002000.Timepoint),
            call: v1002000.Call,
            maxWeight: v1002000.Weight,
        })
    ),
    /**
     * See [`Pallet::as_multi`].
     */
    v1002004: new CallType(
        'Multisig.as_multi',
        sts.struct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => v1002004.AccountId32),
            maybeTimepoint: sts.option(() => v1002004.Timepoint),
            call: v1002004.Call,
            maxWeight: v1002004.Weight,
        })
    ),
    /**
     * See [`Pallet::as_multi`].
     */
    v1002006: new CallType(
        'Multisig.as_multi',
        sts.struct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => v1002006.AccountId32),
            maybeTimepoint: sts.option(() => v1002006.Timepoint),
            call: v1002006.Call,
            maxWeight: v1002006.Weight,
        })
    ),
    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    v1003000: new CallType(
        'Multisig.as_multi',
        sts.struct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => v1003000.AccountId32),
            maybeTimepoint: sts.option(() => v1003000.Timepoint),
            call: v1003000.Call,
            maxWeight: v1003000.Weight,
        })
    ),
}

export const approveAsMulti =  {
    name: 'Multisig.approve_as_multi',
    /**
     * See [`Pallet::approve_as_multi`].
     */
    peoplePolkadotV1002006: new CallType(
        'Multisig.approve_as_multi',
        sts.struct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => peoplePolkadotV1002006.AccountId32),
            maybeTimepoint: sts.option(() => peoplePolkadotV1002006.Timepoint),
            callHash: sts.bytes(),
            maxWeight: peoplePolkadotV1002006.Weight,
        })
    ),
}

export const cancelAsMulti =  {
    name: 'Multisig.cancel_as_multi',
    /**
     * See [`Pallet::cancel_as_multi`].
     */
    peoplePolkadotV1002006: new CallType(
        'Multisig.cancel_as_multi',
        sts.struct({
            threshold: sts.number(),
            otherSignatories: sts.array(() => peoplePolkadotV1002006.AccountId32),
            timepoint: peoplePolkadotV1002006.Timepoint,
            callHash: sts.bytes(),
        })
    ),
}
