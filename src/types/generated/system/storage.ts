import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1002000 from '../v1002000'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'
import * as v1002006 from '../v1002006'
import * as peoplePolkadotV1003000 from '../peoplePolkadotV1003000'
import * as v1003000 from '../v1003000'

export const account =  {
    /**
     *  The full account information for a particular account ID.
     */
    peoplePolkadotV1002006: new StorageType('System.Account', 'Default', [peoplePolkadotV1002006.AccountId32], peoplePolkadotV1002006.AccountInfo) as AccountPeoplePolkadotV1002006,
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.AccountInfo
    get(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<(peoplePolkadotV1002006.AccountInfo | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.AccountId32[]): Promise<(peoplePolkadotV1002006.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.AccountInfo | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.AccountInfo | undefined)][]>
}

export const extrinsicCount =  {
    /**
     *  Total extrinsics count for the current block.
     */
    peoplePolkadotV1002006: new StorageType('System.ExtrinsicCount', 'Optional', [], sts.number()) as ExtrinsicCountPeoplePolkadotV1002006,
}

/**
 *  Total extrinsics count for the current block.
 */
export interface ExtrinsicCountPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockWeight =  {
    /**
     *  The current weight for the block.
     */
    peoplePolkadotV1002006: new StorageType('System.BlockWeight', 'Default', [], peoplePolkadotV1002006.PerDispatchClass) as BlockWeightPeoplePolkadotV1002006,
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.PerDispatchClass
    get(block: Block): Promise<(peoplePolkadotV1002006.PerDispatchClass | undefined)>
}

export const allExtrinsicsLen =  {
    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    peoplePolkadotV1002006: new StorageType('System.AllExtrinsicsLen', 'Optional', [], sts.number()) as AllExtrinsicsLenPeoplePolkadotV1002006,
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface AllExtrinsicsLenPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockHash =  {
    /**
     *  Map of block numbers to block hashes.
     */
    peoplePolkadotV1002006: new StorageType('System.BlockHash', 'Default', [sts.number()], peoplePolkadotV1002006.H256) as BlockHashPeoplePolkadotV1002006,
}

/**
 *  Map of block numbers to block hashes.
 */
export interface BlockHashPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.H256
    get(block: Block, key: number): Promise<(peoplePolkadotV1002006.H256 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(peoplePolkadotV1002006.H256 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (peoplePolkadotV1002006.H256 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (peoplePolkadotV1002006.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (peoplePolkadotV1002006.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (peoplePolkadotV1002006.H256 | undefined)][]>
}

export const extrinsicData =  {
    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    peoplePolkadotV1002006: new StorageType('System.ExtrinsicData', 'Default', [sts.number()], sts.bytes()) as ExtrinsicDataPeoplePolkadotV1002006,
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface ExtrinsicDataPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: number[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
}

export const number =  {
    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    peoplePolkadotV1002006: new StorageType('System.Number', 'Default', [], sts.number()) as NumberPeoplePolkadotV1002006,
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface NumberPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const parentHash =  {
    /**
     *  Hash of the previous block.
     */
    peoplePolkadotV1002006: new StorageType('System.ParentHash', 'Default', [], peoplePolkadotV1002006.H256) as ParentHashPeoplePolkadotV1002006,
}

/**
 *  Hash of the previous block.
 */
export interface ParentHashPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.H256
    get(block: Block): Promise<(peoplePolkadotV1002006.H256 | undefined)>
}

export const digest =  {
    /**
     *  Digest of the current block, also part of the block header.
     */
    peoplePolkadotV1002006: new StorageType('System.Digest', 'Default', [], peoplePolkadotV1002006.Digest) as DigestPeoplePolkadotV1002006,
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.Digest
    get(block: Block): Promise<(peoplePolkadotV1002006.Digest | undefined)>
}

export const events =  {
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    peoplePolkadotV1002006: new StorageType('System.Events', 'Default', [], sts.array(() => peoplePolkadotV1002006.EventRecord)) as EventsPeoplePolkadotV1002006,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    peoplePolkadotV1003000: new StorageType('System.Events', 'Default', [], sts.array(() => peoplePolkadotV1003000.EventRecord)) as EventsPeoplePolkadotV1003000,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1002000: new StorageType('System.Events', 'Default', [], sts.array(() => v1002000.EventRecord)) as EventsV1002000,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1002006: new StorageType('System.Events', 'Default', [], sts.array(() => v1002006.EventRecord)) as EventsV1002006,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1003000: new StorageType('System.Events', 'Default', [], sts.array(() => v1003000.EventRecord)) as EventsV1003000,
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.EventRecord[]
    get(block: Block): Promise<(peoplePolkadotV1002006.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsPeoplePolkadotV1003000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1003000.EventRecord[]
    get(block: Block): Promise<(peoplePolkadotV1003000.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1002000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1002000.EventRecord[]
    get(block: Block): Promise<(v1002000.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1002006.EventRecord[]
    get(block: Block): Promise<(v1002006.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1003000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1003000.EventRecord[]
    get(block: Block): Promise<(v1003000.EventRecord[] | undefined)>
}

export const eventCount =  {
    /**
     *  The number of events in the `Events<T>` list.
     */
    peoplePolkadotV1002006: new StorageType('System.EventCount', 'Default', [], sts.number()) as EventCountPeoplePolkadotV1002006,
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface EventCountPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const eventTopics =  {
    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    peoplePolkadotV1002006: new StorageType('System.EventTopics', 'Default', [peoplePolkadotV1002006.H256], sts.array(() => sts.tuple(() => [sts.number(), sts.number()]))) as EventTopicsPeoplePolkadotV1002006,
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface EventTopicsPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number][]
    get(block: Block, key: peoplePolkadotV1002006.H256): Promise<([number, number][] | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.H256[]): Promise<([number, number][] | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.H256[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.H256): Promise<peoplePolkadotV1002006.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.H256): AsyncIterable<peoplePolkadotV1002006.H256[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.H256, v: ([number, number][] | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.H256): Promise<[k: peoplePolkadotV1002006.H256, v: ([number, number][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.H256, v: ([number, number][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.H256): AsyncIterable<[k: peoplePolkadotV1002006.H256, v: ([number, number][] | undefined)][]>
}

export const lastRuntimeUpgrade =  {
    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    peoplePolkadotV1002006: new StorageType('System.LastRuntimeUpgrade', 'Optional', [], peoplePolkadotV1002006.LastRuntimeUpgradeInfo) as LastRuntimeUpgradePeoplePolkadotV1002006,
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface LastRuntimeUpgradePeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(peoplePolkadotV1002006.LastRuntimeUpgradeInfo | undefined)>
}

export const upgradedToU32RefCount =  {
    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    peoplePolkadotV1002006: new StorageType('System.UpgradedToU32RefCount', 'Default', [], sts.boolean()) as UpgradedToU32RefCountPeoplePolkadotV1002006,
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface UpgradedToU32RefCountPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const upgradedToTripleRefCount =  {
    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    peoplePolkadotV1002006: new StorageType('System.UpgradedToTripleRefCount', 'Default', [], sts.boolean()) as UpgradedToTripleRefCountPeoplePolkadotV1002006,
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface UpgradedToTripleRefCountPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const executionPhase =  {
    /**
     *  The execution phase of the block.
     */
    peoplePolkadotV1002006: new StorageType('System.ExecutionPhase', 'Optional', [], peoplePolkadotV1002006.Phase) as ExecutionPhasePeoplePolkadotV1002006,
}

/**
 *  The execution phase of the block.
 */
export interface ExecutionPhasePeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(peoplePolkadotV1002006.Phase | undefined)>
}

export const authorizedUpgrade =  {
    /**
     *  `Some` if a code upgrade has been authorized.
     */
    peoplePolkadotV1002006: new StorageType('System.AuthorizedUpgrade', 'Optional', [], peoplePolkadotV1002006.CodeUpgradeAuthorization) as AuthorizedUpgradePeoplePolkadotV1002006,
}

/**
 *  `Some` if a code upgrade has been authorized.
 */
export interface AuthorizedUpgradePeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(peoplePolkadotV1002006.CodeUpgradeAuthorization | undefined)>
}

export const inherentsApplied =  {
    /**
     *  Whether all inherents have been applied.
     */
    peoplePolkadotV1003000: new StorageType('System.InherentsApplied', 'Default', [], sts.boolean()) as InherentsAppliedPeoplePolkadotV1003000,
}

/**
 *  Whether all inherents have been applied.
 */
export interface InherentsAppliedPeoplePolkadotV1003000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
