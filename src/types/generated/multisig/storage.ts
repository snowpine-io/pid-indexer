import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const multisigs =  {
    /**
     *  The set of open multisig operations.
     */
    peoplePolkadotV1002006: new StorageType('Multisig.Multisigs', 'Optional', [peoplePolkadotV1002006.AccountId32, sts.bytes()], peoplePolkadotV1002006.Multisig) as MultisigsPeoplePolkadotV1002006,
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigsPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: peoplePolkadotV1002006.AccountId32, key2: Bytes): Promise<(peoplePolkadotV1002006.Multisig | undefined)>
    getMany(block: Block, keys: [peoplePolkadotV1002006.AccountId32, Bytes][]): Promise<(peoplePolkadotV1002006.Multisig | undefined)[]>
    getKeys(block: Block): Promise<[peoplePolkadotV1002006.AccountId32, Bytes][]>
    getKeys(block: Block, key1: peoplePolkadotV1002006.AccountId32): Promise<[peoplePolkadotV1002006.AccountId32, Bytes][]>
    getKeys(block: Block, key1: peoplePolkadotV1002006.AccountId32, key2: Bytes): Promise<[peoplePolkadotV1002006.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[peoplePolkadotV1002006.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: peoplePolkadotV1002006.AccountId32): AsyncIterable<[peoplePolkadotV1002006.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: peoplePolkadotV1002006.AccountId32, key2: Bytes): AsyncIterable<[peoplePolkadotV1002006.AccountId32, Bytes][]>
    getPairs(block: Block): Promise<[k: [peoplePolkadotV1002006.AccountId32, Bytes], v: (peoplePolkadotV1002006.Multisig | undefined)][]>
    getPairs(block: Block, key1: peoplePolkadotV1002006.AccountId32): Promise<[k: [peoplePolkadotV1002006.AccountId32, Bytes], v: (peoplePolkadotV1002006.Multisig | undefined)][]>
    getPairs(block: Block, key1: peoplePolkadotV1002006.AccountId32, key2: Bytes): Promise<[k: [peoplePolkadotV1002006.AccountId32, Bytes], v: (peoplePolkadotV1002006.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [peoplePolkadotV1002006.AccountId32, Bytes], v: (peoplePolkadotV1002006.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: peoplePolkadotV1002006.AccountId32): AsyncIterable<[k: [peoplePolkadotV1002006.AccountId32, Bytes], v: (peoplePolkadotV1002006.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: peoplePolkadotV1002006.AccountId32, key2: Bytes): AsyncIterable<[k: [peoplePolkadotV1002006.AccountId32, Bytes], v: (peoplePolkadotV1002006.Multisig | undefined)][]>
}
