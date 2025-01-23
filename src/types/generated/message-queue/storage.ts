import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const bookStateFor =  {
    /**
     *  The index of the first and last (non-empty) pages.
     */
    peoplePolkadotV1002006: new StorageType('MessageQueue.BookStateFor', 'Default', [peoplePolkadotV1002006.AggregateMessageOrigin], peoplePolkadotV1002006.BookState) as BookStateForPeoplePolkadotV1002006,
}

/**
 *  The index of the first and last (non-empty) pages.
 */
export interface BookStateForPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.BookState
    get(block: Block, key: peoplePolkadotV1002006.AggregateMessageOrigin): Promise<(peoplePolkadotV1002006.BookState | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.AggregateMessageOrigin[]): Promise<(peoplePolkadotV1002006.BookState | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.AggregateMessageOrigin[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.AggregateMessageOrigin): Promise<peoplePolkadotV1002006.AggregateMessageOrigin[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.AggregateMessageOrigin[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AggregateMessageOrigin): AsyncIterable<peoplePolkadotV1002006.AggregateMessageOrigin[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.AggregateMessageOrigin, v: (peoplePolkadotV1002006.BookState | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.AggregateMessageOrigin): Promise<[k: peoplePolkadotV1002006.AggregateMessageOrigin, v: (peoplePolkadotV1002006.BookState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.AggregateMessageOrigin, v: (peoplePolkadotV1002006.BookState | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AggregateMessageOrigin): AsyncIterable<[k: peoplePolkadotV1002006.AggregateMessageOrigin, v: (peoplePolkadotV1002006.BookState | undefined)][]>
}

export const serviceHead =  {
    /**
     *  The origin at which we should begin servicing.
     */
    peoplePolkadotV1002006: new StorageType('MessageQueue.ServiceHead', 'Optional', [], peoplePolkadotV1002006.AggregateMessageOrigin) as ServiceHeadPeoplePolkadotV1002006,
}

/**
 *  The origin at which we should begin servicing.
 */
export interface ServiceHeadPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(peoplePolkadotV1002006.AggregateMessageOrigin | undefined)>
}

export const pages =  {
    /**
     *  The map of page indices to pages.
     */
    peoplePolkadotV1002006: new StorageType('MessageQueue.Pages', 'Optional', [peoplePolkadotV1002006.AggregateMessageOrigin, sts.number()], peoplePolkadotV1002006.Page) as PagesPeoplePolkadotV1002006,
}

/**
 *  The map of page indices to pages.
 */
export interface PagesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: peoplePolkadotV1002006.AggregateMessageOrigin, key2: number): Promise<(peoplePolkadotV1002006.Page | undefined)>
    getMany(block: Block, keys: [peoplePolkadotV1002006.AggregateMessageOrigin, number][]): Promise<(peoplePolkadotV1002006.Page | undefined)[]>
    getKeys(block: Block): Promise<[peoplePolkadotV1002006.AggregateMessageOrigin, number][]>
    getKeys(block: Block, key1: peoplePolkadotV1002006.AggregateMessageOrigin): Promise<[peoplePolkadotV1002006.AggregateMessageOrigin, number][]>
    getKeys(block: Block, key1: peoplePolkadotV1002006.AggregateMessageOrigin, key2: number): Promise<[peoplePolkadotV1002006.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[peoplePolkadotV1002006.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: peoplePolkadotV1002006.AggregateMessageOrigin): AsyncIterable<[peoplePolkadotV1002006.AggregateMessageOrigin, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: peoplePolkadotV1002006.AggregateMessageOrigin, key2: number): AsyncIterable<[peoplePolkadotV1002006.AggregateMessageOrigin, number][]>
    getPairs(block: Block): Promise<[k: [peoplePolkadotV1002006.AggregateMessageOrigin, number], v: (peoplePolkadotV1002006.Page | undefined)][]>
    getPairs(block: Block, key1: peoplePolkadotV1002006.AggregateMessageOrigin): Promise<[k: [peoplePolkadotV1002006.AggregateMessageOrigin, number], v: (peoplePolkadotV1002006.Page | undefined)][]>
    getPairs(block: Block, key1: peoplePolkadotV1002006.AggregateMessageOrigin, key2: number): Promise<[k: [peoplePolkadotV1002006.AggregateMessageOrigin, number], v: (peoplePolkadotV1002006.Page | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [peoplePolkadotV1002006.AggregateMessageOrigin, number], v: (peoplePolkadotV1002006.Page | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: peoplePolkadotV1002006.AggregateMessageOrigin): AsyncIterable<[k: [peoplePolkadotV1002006.AggregateMessageOrigin, number], v: (peoplePolkadotV1002006.Page | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: peoplePolkadotV1002006.AggregateMessageOrigin, key2: number): AsyncIterable<[k: [peoplePolkadotV1002006.AggregateMessageOrigin, number], v: (peoplePolkadotV1002006.Page | undefined)][]>
}
