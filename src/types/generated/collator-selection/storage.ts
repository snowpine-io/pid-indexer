import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const invulnerables =  {
    /**
     *  The invulnerable, permissioned collators. This list must be sorted.
     */
    peoplePolkadotV1002006: new StorageType('CollatorSelection.Invulnerables', 'Default', [], sts.array(() => peoplePolkadotV1002006.AccountId32)) as InvulnerablesPeoplePolkadotV1002006,
}

/**
 *  The invulnerable, permissioned collators. This list must be sorted.
 */
export interface InvulnerablesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.AccountId32[]
    get(block: Block): Promise<(peoplePolkadotV1002006.AccountId32[] | undefined)>
}

export const candidateList =  {
    /**
     *  The (community, limited) collation candidates. `Candidates` and `Invulnerables` should be
     *  mutually exclusive.
     * 
     *  This list is sorted in ascending order by deposit and when the deposits are equal, the least
     *  recently updated is considered greater.
     */
    peoplePolkadotV1002006: new StorageType('CollatorSelection.CandidateList', 'Default', [], sts.array(() => peoplePolkadotV1002006.CandidateInfo)) as CandidateListPeoplePolkadotV1002006,
}

/**
 *  The (community, limited) collation candidates. `Candidates` and `Invulnerables` should be
 *  mutually exclusive.
 * 
 *  This list is sorted in ascending order by deposit and when the deposits are equal, the least
 *  recently updated is considered greater.
 */
export interface CandidateListPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.CandidateInfo[]
    get(block: Block): Promise<(peoplePolkadotV1002006.CandidateInfo[] | undefined)>
}

export const lastAuthoredBlock =  {
    /**
     *  Last block authored by collator.
     */
    peoplePolkadotV1002006: new StorageType('CollatorSelection.LastAuthoredBlock', 'Default', [peoplePolkadotV1002006.AccountId32], sts.number()) as LastAuthoredBlockPeoplePolkadotV1002006,
}

/**
 *  Last block authored by collator.
 */
export interface LastAuthoredBlockPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<(number | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.AccountId32[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (number | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (number | undefined)][]>
}

export const desiredCandidates =  {
    /**
     *  Desired number of candidates.
     * 
     *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
     */
    peoplePolkadotV1002006: new StorageType('CollatorSelection.DesiredCandidates', 'Default', [], sts.number()) as DesiredCandidatesPeoplePolkadotV1002006,
}

/**
 *  Desired number of candidates.
 * 
 *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
 */
export interface DesiredCandidatesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const candidacyBond =  {
    /**
     *  Fixed amount to deposit to become a collator.
     * 
     *  When a collator calls `leave_intent` they immediately receive the deposit back.
     */
    peoplePolkadotV1002006: new StorageType('CollatorSelection.CandidacyBond', 'Default', [], sts.bigint()) as CandidacyBondPeoplePolkadotV1002006,
}

/**
 *  Fixed amount to deposit to become a collator.
 * 
 *  When a collator calls `leave_intent` they immediately receive the deposit back.
 */
export interface CandidacyBondPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
