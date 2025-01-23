import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const inboundXcmpSuspended =  {
    /**
     *  The suspended inbound XCMP channels. All others are not suspended.
     * 
     *  This is a `StorageValue` instead of a `StorageMap` since we expect multiple reads per block
     *  to different keys with a one byte payload. The access to `BoundedBTreeSet` will be cached
     *  within the block and therefore only included once in the proof size.
     * 
     *  NOTE: The PoV benchmarking cannot know this and will over-estimate, but the actual proof
     *  will be smaller.
     */
    peoplePolkadotV1002006: new StorageType('XcmpQueue.InboundXcmpSuspended', 'Default', [], sts.array(() => peoplePolkadotV1002006.Id)) as InboundXcmpSuspendedPeoplePolkadotV1002006,
}

/**
 *  The suspended inbound XCMP channels. All others are not suspended.
 * 
 *  This is a `StorageValue` instead of a `StorageMap` since we expect multiple reads per block
 *  to different keys with a one byte payload. The access to `BoundedBTreeSet` will be cached
 *  within the block and therefore only included once in the proof size.
 * 
 *  NOTE: The PoV benchmarking cannot know this and will over-estimate, but the actual proof
 *  will be smaller.
 */
export interface InboundXcmpSuspendedPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.Id[]
    get(block: Block): Promise<(peoplePolkadotV1002006.Id[] | undefined)>
}

export const outboundXcmpStatus =  {
    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    peoplePolkadotV1002006: new StorageType('XcmpQueue.OutboundXcmpStatus', 'Default', [], sts.array(() => peoplePolkadotV1002006.OutboundChannelDetails)) as OutboundXcmpStatusPeoplePolkadotV1002006,
}

/**
 *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
 *  and last outbound message. If the two indices are equal, then it indicates an empty
 *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
 *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
 *  case of the need to send a high-priority signal message this block.
 *  The bool is true if there is a signal message waiting to be sent.
 */
export interface OutboundXcmpStatusPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.OutboundChannelDetails[]
    get(block: Block): Promise<(peoplePolkadotV1002006.OutboundChannelDetails[] | undefined)>
}

export const outboundXcmpMessages =  {
    /**
     *  The messages outbound in a given XCMP channel.
     */
    peoplePolkadotV1002006: new StorageType('XcmpQueue.OutboundXcmpMessages', 'Default', [peoplePolkadotV1002006.Id, sts.number()], sts.bytes()) as OutboundXcmpMessagesPeoplePolkadotV1002006,
}

/**
 *  The messages outbound in a given XCMP channel.
 */
export interface OutboundXcmpMessagesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key1: peoplePolkadotV1002006.Id, key2: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [peoplePolkadotV1002006.Id, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[peoplePolkadotV1002006.Id, number][]>
    getKeys(block: Block, key1: peoplePolkadotV1002006.Id): Promise<[peoplePolkadotV1002006.Id, number][]>
    getKeys(block: Block, key1: peoplePolkadotV1002006.Id, key2: number): Promise<[peoplePolkadotV1002006.Id, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[peoplePolkadotV1002006.Id, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: peoplePolkadotV1002006.Id): AsyncIterable<[peoplePolkadotV1002006.Id, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: peoplePolkadotV1002006.Id, key2: number): AsyncIterable<[peoplePolkadotV1002006.Id, number][]>
    getPairs(block: Block): Promise<[k: [peoplePolkadotV1002006.Id, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: peoplePolkadotV1002006.Id): Promise<[k: [peoplePolkadotV1002006.Id, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: peoplePolkadotV1002006.Id, key2: number): Promise<[k: [peoplePolkadotV1002006.Id, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [peoplePolkadotV1002006.Id, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: peoplePolkadotV1002006.Id): AsyncIterable<[k: [peoplePolkadotV1002006.Id, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: peoplePolkadotV1002006.Id, key2: number): AsyncIterable<[k: [peoplePolkadotV1002006.Id, number], v: (Bytes | undefined)][]>
}

export const signalMessages =  {
    /**
     *  Any signal messages waiting to be sent.
     */
    peoplePolkadotV1002006: new StorageType('XcmpQueue.SignalMessages', 'Default', [peoplePolkadotV1002006.Id], sts.bytes()) as SignalMessagesPeoplePolkadotV1002006,
}

/**
 *  Any signal messages waiting to be sent.
 */
export interface SignalMessagesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: peoplePolkadotV1002006.Id): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.Id[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.Id[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.Id): Promise<peoplePolkadotV1002006.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.Id): AsyncIterable<peoplePolkadotV1002006.Id[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.Id, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.Id): Promise<[k: peoplePolkadotV1002006.Id, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.Id, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.Id): AsyncIterable<[k: peoplePolkadotV1002006.Id, v: (Bytes | undefined)][]>
}

export const queueConfig =  {
    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    peoplePolkadotV1002006: new StorageType('XcmpQueue.QueueConfig', 'Default', [], peoplePolkadotV1002006.QueueConfigData) as QueueConfigPeoplePolkadotV1002006,
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface QueueConfigPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.QueueConfigData
    get(block: Block): Promise<(peoplePolkadotV1002006.QueueConfigData | undefined)>
}

export const queueSuspended =  {
    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    peoplePolkadotV1002006: new StorageType('XcmpQueue.QueueSuspended', 'Default', [], sts.boolean()) as QueueSuspendedPeoplePolkadotV1002006,
}

/**
 *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
 */
export interface QueueSuspendedPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const deliveryFeeFactor =  {
    /**
     *  The factor to multiply the base delivery fee by.
     */
    peoplePolkadotV1002006: new StorageType('XcmpQueue.DeliveryFeeFactor', 'Default', [peoplePolkadotV1002006.Id], peoplePolkadotV1002006.FixedU128) as DeliveryFeeFactorPeoplePolkadotV1002006,
}

/**
 *  The factor to multiply the base delivery fee by.
 */
export interface DeliveryFeeFactorPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.FixedU128
    get(block: Block, key: peoplePolkadotV1002006.Id): Promise<(peoplePolkadotV1002006.FixedU128 | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.Id[]): Promise<(peoplePolkadotV1002006.FixedU128 | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.Id[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.Id): Promise<peoplePolkadotV1002006.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.Id): AsyncIterable<peoplePolkadotV1002006.Id[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.Id, v: (peoplePolkadotV1002006.FixedU128 | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.Id): Promise<[k: peoplePolkadotV1002006.Id, v: (peoplePolkadotV1002006.FixedU128 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.Id, v: (peoplePolkadotV1002006.FixedU128 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.Id): AsyncIterable<[k: peoplePolkadotV1002006.Id, v: (peoplePolkadotV1002006.FixedU128 | undefined)][]>
}
