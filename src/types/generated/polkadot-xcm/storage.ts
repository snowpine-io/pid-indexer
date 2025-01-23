import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'
import * as peoplePolkadotV1003000 from '../peoplePolkadotV1003000'

export const queryCounter =  {
    /**
     *  The latest available query index.
     */
    peoplePolkadotV1002006: new StorageType('PolkadotXcm.QueryCounter', 'Default', [], sts.bigint()) as QueryCounterPeoplePolkadotV1002006,
}

/**
 *  The latest available query index.
 */
export interface QueryCounterPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const queries =  {
    /**
     *  The ongoing queries.
     */
    peoplePolkadotV1002006: new StorageType('PolkadotXcm.Queries', 'Optional', [sts.bigint()], peoplePolkadotV1002006.QueryStatus) as QueriesPeoplePolkadotV1002006,
}

/**
 *  The ongoing queries.
 */
export interface QueriesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(peoplePolkadotV1002006.QueryStatus | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(peoplePolkadotV1002006.QueryStatus | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (peoplePolkadotV1002006.QueryStatus | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (peoplePolkadotV1002006.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (peoplePolkadotV1002006.QueryStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (peoplePolkadotV1002006.QueryStatus | undefined)][]>
}

export const assetTraps =  {
    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `Assets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    peoplePolkadotV1002006: new StorageType('PolkadotXcm.AssetTraps', 'Default', [peoplePolkadotV1002006.H256], sts.number()) as AssetTrapsPeoplePolkadotV1002006,
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `Assets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface AssetTrapsPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block, key: peoplePolkadotV1002006.H256): Promise<(number | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.H256[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.H256[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.H256): Promise<peoplePolkadotV1002006.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.H256): AsyncIterable<peoplePolkadotV1002006.H256[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.H256, v: (number | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.H256): Promise<[k: peoplePolkadotV1002006.H256, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.H256, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.H256): AsyncIterable<[k: peoplePolkadotV1002006.H256, v: (number | undefined)][]>
}

export const safeXcmVersion =  {
    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    peoplePolkadotV1002006: new StorageType('PolkadotXcm.SafeXcmVersion', 'Optional', [], sts.number()) as SafeXcmVersionPeoplePolkadotV1002006,
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface SafeXcmVersionPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const supportedVersion =  {
    /**
     *  The Latest versions that we know various locations support.
     */
    peoplePolkadotV1002006: new StorageType('PolkadotXcm.SupportedVersion', 'Optional', [sts.number(), peoplePolkadotV1002006.VersionedLocation], sts.number()) as SupportedVersionPeoplePolkadotV1002006,
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface SupportedVersionPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: peoplePolkadotV1002006.VersionedLocation): Promise<(number | undefined)>
    getMany(block: Block, keys: [number, peoplePolkadotV1002006.VersionedLocation][]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getKeys(block: Block, key1: number, key2: peoplePolkadotV1002006.VersionedLocation): Promise<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: peoplePolkadotV1002006.VersionedLocation): AsyncIterable<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getPairs(block: Block): Promise<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: (number | undefined)][]>
    getPairs(block: Block, key1: number, key2: peoplePolkadotV1002006.VersionedLocation): Promise<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: peoplePolkadotV1002006.VersionedLocation): AsyncIterable<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: (number | undefined)][]>
}

export const versionNotifiers =  {
    /**
     *  All locations that we have requested version notifications from.
     */
    peoplePolkadotV1002006: new StorageType('PolkadotXcm.VersionNotifiers', 'Optional', [sts.number(), peoplePolkadotV1002006.VersionedLocation], sts.bigint()) as VersionNotifiersPeoplePolkadotV1002006,
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface VersionNotifiersPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: peoplePolkadotV1002006.VersionedLocation): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [number, peoplePolkadotV1002006.VersionedLocation][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getKeys(block: Block, key1: number, key2: peoplePolkadotV1002006.VersionedLocation): Promise<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: peoplePolkadotV1002006.VersionedLocation): AsyncIterable<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getPairs(block: Block): Promise<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: number, key2: peoplePolkadotV1002006.VersionedLocation): Promise<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: peoplePolkadotV1002006.VersionedLocation): AsyncIterable<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: (bigint | undefined)][]>
}

export const versionNotifyTargets =  {
    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    peoplePolkadotV1002006: new StorageType('PolkadotXcm.VersionNotifyTargets', 'Optional', [sts.number(), peoplePolkadotV1002006.VersionedLocation], sts.tuple(() => [sts.bigint(), peoplePolkadotV1002006.Weight, sts.number()])) as VersionNotifyTargetsPeoplePolkadotV1002006,
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface VersionNotifyTargetsPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: peoplePolkadotV1002006.VersionedLocation): Promise<([bigint, peoplePolkadotV1002006.Weight, number] | undefined)>
    getMany(block: Block, keys: [number, peoplePolkadotV1002006.VersionedLocation][]): Promise<([bigint, peoplePolkadotV1002006.Weight, number] | undefined)[]>
    getKeys(block: Block): Promise<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getKeys(block: Block, key1: number): Promise<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getKeys(block: Block, key1: number, key2: peoplePolkadotV1002006.VersionedLocation): Promise<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: peoplePolkadotV1002006.VersionedLocation): AsyncIterable<[number, peoplePolkadotV1002006.VersionedLocation][]>
    getPairs(block: Block): Promise<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: ([bigint, peoplePolkadotV1002006.Weight, number] | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: ([bigint, peoplePolkadotV1002006.Weight, number] | undefined)][]>
    getPairs(block: Block, key1: number, key2: peoplePolkadotV1002006.VersionedLocation): Promise<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: ([bigint, peoplePolkadotV1002006.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: ([bigint, peoplePolkadotV1002006.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: ([bigint, peoplePolkadotV1002006.Weight, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: peoplePolkadotV1002006.VersionedLocation): AsyncIterable<[k: [number, peoplePolkadotV1002006.VersionedLocation], v: ([bigint, peoplePolkadotV1002006.Weight, number] | undefined)][]>
}

export const versionDiscoveryQueue =  {
    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    peoplePolkadotV1002006: new StorageType('PolkadotXcm.VersionDiscoveryQueue', 'Default', [], sts.array(() => sts.tuple(() => [peoplePolkadotV1002006.VersionedLocation, sts.number()]))) as VersionDiscoveryQueuePeoplePolkadotV1002006,
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface VersionDiscoveryQueuePeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [peoplePolkadotV1002006.VersionedLocation, number][]
    get(block: Block): Promise<([peoplePolkadotV1002006.VersionedLocation, number][] | undefined)>
}

export const currentMigration =  {
    /**
     *  The current migration's stage, if any.
     */
    peoplePolkadotV1002006: new StorageType('PolkadotXcm.CurrentMigration', 'Optional', [], peoplePolkadotV1002006.VersionMigrationStage) as CurrentMigrationPeoplePolkadotV1002006,
}

/**
 *  The current migration's stage, if any.
 */
export interface CurrentMigrationPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(peoplePolkadotV1002006.VersionMigrationStage | undefined)>
}

export const remoteLockedFungibles =  {
    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    peoplePolkadotV1002006: new StorageType('PolkadotXcm.RemoteLockedFungibles', 'Optional', [sts.number(), peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId], peoplePolkadotV1002006.RemoteLockedFungibleRecord) as RemoteLockedFungiblesPeoplePolkadotV1002006,
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface RemoteLockedFungiblesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: number, key2: peoplePolkadotV1002006.AccountId32, key3: peoplePolkadotV1002006.VersionedAssetId): Promise<(peoplePolkadotV1002006.RemoteLockedFungibleRecord | undefined)>
    getMany(block: Block, keys: [number, peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId][]): Promise<(peoplePolkadotV1002006.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(block: Block): Promise<[number, peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId][]>
    getKeys(block: Block, key1: number): Promise<[number, peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: peoplePolkadotV1002006.AccountId32): Promise<[number, peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId][]>
    getKeys(block: Block, key1: number, key2: peoplePolkadotV1002006.AccountId32, key3: peoplePolkadotV1002006.VersionedAssetId): Promise<[number, peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[number, peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: peoplePolkadotV1002006.AccountId32): AsyncIterable<[number, peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId][]>
    getKeysPaged(pageSize: number, block: Block, key1: number, key2: peoplePolkadotV1002006.AccountId32, key3: peoplePolkadotV1002006.VersionedAssetId): AsyncIterable<[number, peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId][]>
    getPairs(block: Block): Promise<[k: [number, peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId], v: (peoplePolkadotV1002006.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number): Promise<[k: [number, peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId], v: (peoplePolkadotV1002006.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: peoplePolkadotV1002006.AccountId32): Promise<[k: [number, peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId], v: (peoplePolkadotV1002006.RemoteLockedFungibleRecord | undefined)][]>
    getPairs(block: Block, key1: number, key2: peoplePolkadotV1002006.AccountId32, key3: peoplePolkadotV1002006.VersionedAssetId): Promise<[k: [number, peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId], v: (peoplePolkadotV1002006.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId], v: (peoplePolkadotV1002006.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number): AsyncIterable<[k: [number, peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId], v: (peoplePolkadotV1002006.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: peoplePolkadotV1002006.AccountId32): AsyncIterable<[k: [number, peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId], v: (peoplePolkadotV1002006.RemoteLockedFungibleRecord | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: number, key2: peoplePolkadotV1002006.AccountId32, key3: peoplePolkadotV1002006.VersionedAssetId): AsyncIterable<[k: [number, peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.VersionedAssetId], v: (peoplePolkadotV1002006.RemoteLockedFungibleRecord | undefined)][]>
}

export const lockedFungibles =  {
    /**
     *  Fungible assets which we know are locked on this chain.
     */
    peoplePolkadotV1002006: new StorageType('PolkadotXcm.LockedFungibles', 'Optional', [peoplePolkadotV1002006.AccountId32], sts.array(() => sts.tuple(() => [sts.bigint(), peoplePolkadotV1002006.VersionedLocation]))) as LockedFungiblesPeoplePolkadotV1002006,
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface LockedFungiblesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<([bigint, peoplePolkadotV1002006.VersionedLocation][] | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.AccountId32[]): Promise<([bigint, peoplePolkadotV1002006.VersionedLocation][] | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.AccountId32, v: ([bigint, peoplePolkadotV1002006.VersionedLocation][] | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<[k: peoplePolkadotV1002006.AccountId32, v: ([bigint, peoplePolkadotV1002006.VersionedLocation][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: ([bigint, peoplePolkadotV1002006.VersionedLocation][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: ([bigint, peoplePolkadotV1002006.VersionedLocation][] | undefined)][]>
}

export const xcmExecutionSuspended =  {
    /**
     *  Global suspension state of the XCM executor.
     */
    peoplePolkadotV1002006: new StorageType('PolkadotXcm.XcmExecutionSuspended', 'Default', [], sts.boolean()) as XcmExecutionSuspendedPeoplePolkadotV1002006,
}

/**
 *  Global suspension state of the XCM executor.
 */
export interface XcmExecutionSuspendedPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const shouldRecordXcm =  {
    /**
     *  Whether or not incoming XCMs (both executed locally and received) should be recorded.
     *  Only one XCM program will be recorded at a time.
     *  This is meant to be used in runtime APIs, and it's advised it stays false
     *  for all other use cases, so as to not degrade regular performance.
     * 
     *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
     *  implementation in the XCM executor configuration.
     */
    peoplePolkadotV1003000: new StorageType('PolkadotXcm.ShouldRecordXcm', 'Default', [], sts.boolean()) as ShouldRecordXcmPeoplePolkadotV1003000,
}

/**
 *  Whether or not incoming XCMs (both executed locally and received) should be recorded.
 *  Only one XCM program will be recorded at a time.
 *  This is meant to be used in runtime APIs, and it's advised it stays false
 *  for all other use cases, so as to not degrade regular performance.
 * 
 *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
 *  implementation in the XCM executor configuration.
 */
export interface ShouldRecordXcmPeoplePolkadotV1003000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const recordedXcm =  {
    /**
     *  If [`ShouldRecordXcm`] is set to true, then the last XCM program executed locally
     *  will be stored here.
     *  Runtime APIs can fetch the XCM that was executed by accessing this value.
     * 
     *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
     *  implementation in the XCM executor configuration.
     */
    peoplePolkadotV1003000: new StorageType('PolkadotXcm.RecordedXcm', 'Optional', [], sts.array(() => peoplePolkadotV1003000.V4Instruction)) as RecordedXcmPeoplePolkadotV1003000,
}

/**
 *  If [`ShouldRecordXcm`] is set to true, then the last XCM program executed locally
 *  will be stored here.
 *  Runtime APIs can fetch the XCM that was executed by accessing this value.
 * 
 *  Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
 *  implementation in the XCM executor configuration.
 */
export interface RecordedXcmPeoplePolkadotV1003000  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(peoplePolkadotV1003000.V4Instruction[] | undefined)>
}
