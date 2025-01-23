import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const addRegistrar =  {
    name: 'Identity.add_registrar',
    /**
     * See [`Pallet::add_registrar`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.add_registrar',
        sts.struct({
            account: peoplePolkadotV1002006.MultiAddress,
        })
    ),
}

export const setIdentity =  {
    name: 'Identity.set_identity',
    /**
     * See [`Pallet::set_identity`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.set_identity',
        sts.struct({
            info: peoplePolkadotV1002006.IdentityInfo,
        })
    ),
}

export const setSubs =  {
    name: 'Identity.set_subs',
    /**
     * See [`Pallet::set_subs`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.set_subs',
        sts.struct({
            subs: sts.array(() => sts.tuple(() => [peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.Data])),
        })
    ),
}

export const clearIdentity =  {
    name: 'Identity.clear_identity',
    /**
     * See [`Pallet::clear_identity`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.clear_identity',
        sts.unit()
    ),
}

export const requestJudgement =  {
    name: 'Identity.request_judgement',
    /**
     * See [`Pallet::request_judgement`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.request_judgement',
        sts.struct({
            regIndex: sts.number(),
            maxFee: sts.bigint(),
        })
    ),
}

export const cancelRequest =  {
    name: 'Identity.cancel_request',
    /**
     * See [`Pallet::cancel_request`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.cancel_request',
        sts.struct({
            regIndex: sts.number(),
        })
    ),
}

export const setFee =  {
    name: 'Identity.set_fee',
    /**
     * See [`Pallet::set_fee`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.set_fee',
        sts.struct({
            index: sts.number(),
            fee: sts.bigint(),
        })
    ),
}

export const setAccountId =  {
    name: 'Identity.set_account_id',
    /**
     * See [`Pallet::set_account_id`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.set_account_id',
        sts.struct({
            index: sts.number(),
            new: peoplePolkadotV1002006.MultiAddress,
        })
    ),
}

export const setFields =  {
    name: 'Identity.set_fields',
    /**
     * See [`Pallet::set_fields`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.set_fields',
        sts.struct({
            index: sts.number(),
            fields: sts.bigint(),
        })
    ),
}

export const provideJudgement =  {
    name: 'Identity.provide_judgement',
    /**
     * See [`Pallet::provide_judgement`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.provide_judgement',
        sts.struct({
            regIndex: sts.number(),
            target: peoplePolkadotV1002006.MultiAddress,
            judgement: peoplePolkadotV1002006.Judgement,
            identity: peoplePolkadotV1002006.H256,
        })
    ),
}

export const killIdentity =  {
    name: 'Identity.kill_identity',
    /**
     * See [`Pallet::kill_identity`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.kill_identity',
        sts.struct({
            target: peoplePolkadotV1002006.MultiAddress,
        })
    ),
}

export const addSub =  {
    name: 'Identity.add_sub',
    /**
     * See [`Pallet::add_sub`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.add_sub',
        sts.struct({
            sub: peoplePolkadotV1002006.MultiAddress,
            data: peoplePolkadotV1002006.Data,
        })
    ),
}

export const renameSub =  {
    name: 'Identity.rename_sub',
    /**
     * See [`Pallet::rename_sub`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.rename_sub',
        sts.struct({
            sub: peoplePolkadotV1002006.MultiAddress,
            data: peoplePolkadotV1002006.Data,
        })
    ),
}

export const removeSub =  {
    name: 'Identity.remove_sub',
    /**
     * See [`Pallet::remove_sub`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.remove_sub',
        sts.struct({
            sub: peoplePolkadotV1002006.MultiAddress,
        })
    ),
}

export const quitSub =  {
    name: 'Identity.quit_sub',
    /**
     * See [`Pallet::quit_sub`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.quit_sub',
        sts.unit()
    ),
}

export const addUsernameAuthority =  {
    name: 'Identity.add_username_authority',
    /**
     * See [`Pallet::add_username_authority`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.add_username_authority',
        sts.struct({
            authority: peoplePolkadotV1002006.MultiAddress,
            suffix: sts.bytes(),
            allocation: sts.number(),
        })
    ),
}

export const removeUsernameAuthority =  {
    name: 'Identity.remove_username_authority',
    /**
     * See [`Pallet::remove_username_authority`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.remove_username_authority',
        sts.struct({
            authority: peoplePolkadotV1002006.MultiAddress,
        })
    ),
}

export const setUsernameFor =  {
    name: 'Identity.set_username_for',
    /**
     * See [`Pallet::set_username_for`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.set_username_for',
        sts.struct({
            who: peoplePolkadotV1002006.MultiAddress,
            username: sts.bytes(),
            signature: sts.option(() => peoplePolkadotV1002006.MultiSignature),
        })
    ),
}

export const acceptUsername =  {
    name: 'Identity.accept_username',
    /**
     * See [`Pallet::accept_username`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.accept_username',
        sts.struct({
            username: sts.bytes(),
        })
    ),
}

export const removeExpiredApproval =  {
    name: 'Identity.remove_expired_approval',
    /**
     * See [`Pallet::remove_expired_approval`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.remove_expired_approval',
        sts.struct({
            username: sts.bytes(),
        })
    ),
}

export const setPrimaryUsername =  {
    name: 'Identity.set_primary_username',
    /**
     * See [`Pallet::set_primary_username`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.set_primary_username',
        sts.struct({
            username: sts.bytes(),
        })
    ),
}

export const removeDanglingUsername =  {
    name: 'Identity.remove_dangling_username',
    /**
     * See [`Pallet::remove_dangling_username`].
     */
    peoplePolkadotV1002006: new CallType(
        'Identity.remove_dangling_username',
        sts.struct({
            username: sts.bytes(),
        })
    ),
}
