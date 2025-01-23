import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const newMultisig =  {
    name: 'Multisig.NewMultisig',
    /**
     * A new multisig operation has begun.
     */
    peoplePolkadotV1002006: new EventType(
        'Multisig.NewMultisig',
        sts.struct({
            approving: peoplePolkadotV1002006.AccountId32,
            multisig: peoplePolkadotV1002006.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigApproval =  {
    name: 'Multisig.MultisigApproval',
    /**
     * A multisig operation has been approved by someone.
     */
    peoplePolkadotV1002006: new EventType(
        'Multisig.MultisigApproval',
        sts.struct({
            approving: peoplePolkadotV1002006.AccountId32,
            timepoint: peoplePolkadotV1002006.Timepoint,
            multisig: peoplePolkadotV1002006.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigExecuted =  {
    name: 'Multisig.MultisigExecuted',
    /**
     * A multisig operation has been executed.
     */
    peoplePolkadotV1002006: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: peoplePolkadotV1002006.AccountId32,
            timepoint: peoplePolkadotV1002006.Timepoint,
            multisig: peoplePolkadotV1002006.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => peoplePolkadotV1002006.DispatchError),
        })
    ),
}

export const multisigCancelled =  {
    name: 'Multisig.MultisigCancelled',
    /**
     * A multisig operation has been cancelled.
     */
    peoplePolkadotV1002006: new EventType(
        'Multisig.MultisigCancelled',
        sts.struct({
            cancelling: peoplePolkadotV1002006.AccountId32,
            timepoint: peoplePolkadotV1002006.Timepoint,
            multisig: peoplePolkadotV1002006.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}
