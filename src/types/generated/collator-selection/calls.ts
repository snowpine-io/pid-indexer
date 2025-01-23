import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const setInvulnerables =  {
    name: 'CollatorSelection.set_invulnerables',
    /**
     * See [`Pallet::set_invulnerables`].
     */
    peoplePolkadotV1002006: new CallType(
        'CollatorSelection.set_invulnerables',
        sts.struct({
            new: sts.array(() => peoplePolkadotV1002006.AccountId32),
        })
    ),
}

export const setDesiredCandidates =  {
    name: 'CollatorSelection.set_desired_candidates',
    /**
     * See [`Pallet::set_desired_candidates`].
     */
    peoplePolkadotV1002006: new CallType(
        'CollatorSelection.set_desired_candidates',
        sts.struct({
            max: sts.number(),
        })
    ),
}

export const setCandidacyBond =  {
    name: 'CollatorSelection.set_candidacy_bond',
    /**
     * See [`Pallet::set_candidacy_bond`].
     */
    peoplePolkadotV1002006: new CallType(
        'CollatorSelection.set_candidacy_bond',
        sts.struct({
            bond: sts.bigint(),
        })
    ),
}

export const registerAsCandidate =  {
    name: 'CollatorSelection.register_as_candidate',
    /**
     * See [`Pallet::register_as_candidate`].
     */
    peoplePolkadotV1002006: new CallType(
        'CollatorSelection.register_as_candidate',
        sts.unit()
    ),
}

export const leaveIntent =  {
    name: 'CollatorSelection.leave_intent',
    /**
     * See [`Pallet::leave_intent`].
     */
    peoplePolkadotV1002006: new CallType(
        'CollatorSelection.leave_intent',
        sts.unit()
    ),
}

export const addInvulnerable =  {
    name: 'CollatorSelection.add_invulnerable',
    /**
     * See [`Pallet::add_invulnerable`].
     */
    peoplePolkadotV1002006: new CallType(
        'CollatorSelection.add_invulnerable',
        sts.struct({
            who: peoplePolkadotV1002006.AccountId32,
        })
    ),
}

export const removeInvulnerable =  {
    name: 'CollatorSelection.remove_invulnerable',
    /**
     * See [`Pallet::remove_invulnerable`].
     */
    peoplePolkadotV1002006: new CallType(
        'CollatorSelection.remove_invulnerable',
        sts.struct({
            who: peoplePolkadotV1002006.AccountId32,
        })
    ),
}

export const updateBond =  {
    name: 'CollatorSelection.update_bond',
    /**
     * See [`Pallet::update_bond`].
     */
    peoplePolkadotV1002006: new CallType(
        'CollatorSelection.update_bond',
        sts.struct({
            newDeposit: sts.bigint(),
        })
    ),
}

export const takeCandidateSlot =  {
    name: 'CollatorSelection.take_candidate_slot',
    /**
     * See [`Pallet::take_candidate_slot`].
     */
    peoplePolkadotV1002006: new CallType(
        'CollatorSelection.take_candidate_slot',
        sts.struct({
            deposit: sts.bigint(),
            target: peoplePolkadotV1002006.AccountId32,
        })
    ),
}
