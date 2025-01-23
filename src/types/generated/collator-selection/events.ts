import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const newInvulnerables =  {
    name: 'CollatorSelection.NewInvulnerables',
    /**
     * New Invulnerables were set.
     */
    peoplePolkadotV1002006: new EventType(
        'CollatorSelection.NewInvulnerables',
        sts.struct({
            invulnerables: sts.array(() => peoplePolkadotV1002006.AccountId32),
        })
    ),
}

export const invulnerableAdded =  {
    name: 'CollatorSelection.InvulnerableAdded',
    /**
     * A new Invulnerable was added.
     */
    peoplePolkadotV1002006: new EventType(
        'CollatorSelection.InvulnerableAdded',
        sts.struct({
            accountId: peoplePolkadotV1002006.AccountId32,
        })
    ),
}

export const invulnerableRemoved =  {
    name: 'CollatorSelection.InvulnerableRemoved',
    /**
     * An Invulnerable was removed.
     */
    peoplePolkadotV1002006: new EventType(
        'CollatorSelection.InvulnerableRemoved',
        sts.struct({
            accountId: peoplePolkadotV1002006.AccountId32,
        })
    ),
}

export const newDesiredCandidates =  {
    name: 'CollatorSelection.NewDesiredCandidates',
    /**
     * The number of desired candidates was set.
     */
    peoplePolkadotV1002006: new EventType(
        'CollatorSelection.NewDesiredCandidates',
        sts.struct({
            desiredCandidates: sts.number(),
        })
    ),
}

export const newCandidacyBond =  {
    name: 'CollatorSelection.NewCandidacyBond',
    /**
     * The candidacy bond was set.
     */
    peoplePolkadotV1002006: new EventType(
        'CollatorSelection.NewCandidacyBond',
        sts.struct({
            bondAmount: sts.bigint(),
        })
    ),
}

export const candidateAdded =  {
    name: 'CollatorSelection.CandidateAdded',
    /**
     * A new candidate joined.
     */
    peoplePolkadotV1002006: new EventType(
        'CollatorSelection.CandidateAdded',
        sts.struct({
            accountId: peoplePolkadotV1002006.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const candidateBondUpdated =  {
    name: 'CollatorSelection.CandidateBondUpdated',
    /**
     * Bond of a candidate updated.
     */
    peoplePolkadotV1002006: new EventType(
        'CollatorSelection.CandidateBondUpdated',
        sts.struct({
            accountId: peoplePolkadotV1002006.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const candidateRemoved =  {
    name: 'CollatorSelection.CandidateRemoved',
    /**
     * A candidate was removed.
     */
    peoplePolkadotV1002006: new EventType(
        'CollatorSelection.CandidateRemoved',
        sts.struct({
            accountId: peoplePolkadotV1002006.AccountId32,
        })
    ),
}

export const candidateReplaced =  {
    name: 'CollatorSelection.CandidateReplaced',
    /**
     * An account was replaced in the candidate list by another one.
     */
    peoplePolkadotV1002006: new EventType(
        'CollatorSelection.CandidateReplaced',
        sts.struct({
            old: peoplePolkadotV1002006.AccountId32,
            new: peoplePolkadotV1002006.AccountId32,
            deposit: sts.bigint(),
        })
    ),
}

export const invalidInvulnerableSkipped =  {
    name: 'CollatorSelection.InvalidInvulnerableSkipped',
    /**
     * An account was unable to be added to the Invulnerables because they did not have keys
     * registered. Other Invulnerables may have been set.
     */
    peoplePolkadotV1002006: new EventType(
        'CollatorSelection.InvalidInvulnerableSkipped',
        sts.struct({
            accountId: peoplePolkadotV1002006.AccountId32,
        })
    ),
}
