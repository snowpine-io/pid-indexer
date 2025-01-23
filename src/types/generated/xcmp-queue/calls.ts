import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'

export const suspendXcmExecution =  {
    name: 'XcmpQueue.suspend_xcm_execution',
    /**
     * See [`Pallet::suspend_xcm_execution`].
     */
    peoplePolkadotV1002006: new CallType(
        'XcmpQueue.suspend_xcm_execution',
        sts.unit()
    ),
}

export const resumeXcmExecution =  {
    name: 'XcmpQueue.resume_xcm_execution',
    /**
     * See [`Pallet::resume_xcm_execution`].
     */
    peoplePolkadotV1002006: new CallType(
        'XcmpQueue.resume_xcm_execution',
        sts.unit()
    ),
}

export const updateSuspendThreshold =  {
    name: 'XcmpQueue.update_suspend_threshold',
    /**
     * See [`Pallet::update_suspend_threshold`].
     */
    peoplePolkadotV1002006: new CallType(
        'XcmpQueue.update_suspend_threshold',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const updateDropThreshold =  {
    name: 'XcmpQueue.update_drop_threshold',
    /**
     * See [`Pallet::update_drop_threshold`].
     */
    peoplePolkadotV1002006: new CallType(
        'XcmpQueue.update_drop_threshold',
        sts.struct({
            new: sts.number(),
        })
    ),
}

export const updateResumeThreshold =  {
    name: 'XcmpQueue.update_resume_threshold',
    /**
     * See [`Pallet::update_resume_threshold`].
     */
    peoplePolkadotV1002006: new CallType(
        'XcmpQueue.update_resume_threshold',
        sts.struct({
            new: sts.number(),
        })
    ),
}
