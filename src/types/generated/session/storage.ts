import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const validators =  {
    /**
     *  The current set of validators.
     */
    peoplePolkadotV1002006: new StorageType('Session.Validators', 'Default', [], sts.array(() => peoplePolkadotV1002006.AccountId32)) as ValidatorsPeoplePolkadotV1002006,
}

/**
 *  The current set of validators.
 */
export interface ValidatorsPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.AccountId32[]
    get(block: Block): Promise<(peoplePolkadotV1002006.AccountId32[] | undefined)>
}

export const currentIndex =  {
    /**
     *  Current index of the session.
     */
    peoplePolkadotV1002006: new StorageType('Session.CurrentIndex', 'Default', [], sts.number()) as CurrentIndexPeoplePolkadotV1002006,
}

/**
 *  Current index of the session.
 */
export interface CurrentIndexPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const queuedChanged =  {
    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    peoplePolkadotV1002006: new StorageType('Session.QueuedChanged', 'Default', [], sts.boolean()) as QueuedChangedPeoplePolkadotV1002006,
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface QueuedChangedPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const queuedKeys =  {
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    peoplePolkadotV1002006: new StorageType('Session.QueuedKeys', 'Default', [], sts.array(() => sts.tuple(() => [peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.SessionKeys]))) as QueuedKeysPeoplePolkadotV1002006,
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.SessionKeys][]
    get(block: Block): Promise<([peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.SessionKeys][] | undefined)>
}

export const disabledValidators =  {
    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    peoplePolkadotV1002006: new StorageType('Session.DisabledValidators', 'Default', [], sts.array(() => sts.number())) as DisabledValidatorsPeoplePolkadotV1002006,
}

/**
 *  Indices of disabled validators.
 * 
 *  The vec is always kept sorted so that we can find whether a given validator is
 *  disabled using binary search. It gets cleared when `on_session_ending` returns
 *  a new set of identities.
 */
export interface DisabledValidatorsPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<(number[] | undefined)>
}

export const nextKeys =  {
    /**
     *  The next session keys for a validator.
     */
    peoplePolkadotV1002006: new StorageType('Session.NextKeys', 'Optional', [peoplePolkadotV1002006.AccountId32], peoplePolkadotV1002006.SessionKeys) as NextKeysPeoplePolkadotV1002006,
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<(peoplePolkadotV1002006.SessionKeys | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.AccountId32[]): Promise<(peoplePolkadotV1002006.SessionKeys | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.SessionKeys | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.SessionKeys | undefined)][]>
}

export const keyOwner =  {
    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    peoplePolkadotV1002006: new StorageType('Session.KeyOwner', 'Optional', [sts.tuple(() => [peoplePolkadotV1002006.KeyTypeId, sts.bytes()])], peoplePolkadotV1002006.AccountId32) as KeyOwnerPeoplePolkadotV1002006,
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface KeyOwnerPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [peoplePolkadotV1002006.KeyTypeId, Bytes]): Promise<(peoplePolkadotV1002006.AccountId32 | undefined)>
    getMany(block: Block, keys: [peoplePolkadotV1002006.KeyTypeId, Bytes][]): Promise<(peoplePolkadotV1002006.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[peoplePolkadotV1002006.KeyTypeId, Bytes][]>
    getKeys(block: Block, key: [peoplePolkadotV1002006.KeyTypeId, Bytes]): Promise<[peoplePolkadotV1002006.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[peoplePolkadotV1002006.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key: [peoplePolkadotV1002006.KeyTypeId, Bytes]): AsyncIterable<[peoplePolkadotV1002006.KeyTypeId, Bytes][]>
    getPairs(block: Block): Promise<[k: [peoplePolkadotV1002006.KeyTypeId, Bytes], v: (peoplePolkadotV1002006.AccountId32 | undefined)][]>
    getPairs(block: Block, key: [peoplePolkadotV1002006.KeyTypeId, Bytes]): Promise<[k: [peoplePolkadotV1002006.KeyTypeId, Bytes], v: (peoplePolkadotV1002006.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [peoplePolkadotV1002006.KeyTypeId, Bytes], v: (peoplePolkadotV1002006.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [peoplePolkadotV1002006.KeyTypeId, Bytes]): AsyncIterable<[k: [peoplePolkadotV1002006.KeyTypeId, Bytes], v: (peoplePolkadotV1002006.AccountId32 | undefined)][]>
}
