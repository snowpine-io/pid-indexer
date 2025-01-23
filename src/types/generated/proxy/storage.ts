import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const proxies =  {
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    peoplePolkadotV1002006: new StorageType('Proxy.Proxies', 'Default', [peoplePolkadotV1002006.AccountId32], sts.tuple(() => [sts.array(() => peoplePolkadotV1002006.ProxyDefinition), sts.bigint()])) as ProxiesPeoplePolkadotV1002006,
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxiesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [peoplePolkadotV1002006.ProxyDefinition[], bigint]
    get(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<([peoplePolkadotV1002006.ProxyDefinition[], bigint] | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.AccountId32[]): Promise<([peoplePolkadotV1002006.ProxyDefinition[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.AccountId32, v: ([peoplePolkadotV1002006.ProxyDefinition[], bigint] | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<[k: peoplePolkadotV1002006.AccountId32, v: ([peoplePolkadotV1002006.ProxyDefinition[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: ([peoplePolkadotV1002006.ProxyDefinition[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: ([peoplePolkadotV1002006.ProxyDefinition[], bigint] | undefined)][]>
}

export const announcements =  {
    /**
     *  The announcements made by the proxy (key).
     */
    peoplePolkadotV1002006: new StorageType('Proxy.Announcements', 'Default', [peoplePolkadotV1002006.AccountId32], sts.tuple(() => [sts.array(() => peoplePolkadotV1002006.Announcement), sts.bigint()])) as AnnouncementsPeoplePolkadotV1002006,
}

/**
 *  The announcements made by the proxy (key).
 */
export interface AnnouncementsPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [peoplePolkadotV1002006.Announcement[], bigint]
    get(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<([peoplePolkadotV1002006.Announcement[], bigint] | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.AccountId32[]): Promise<([peoplePolkadotV1002006.Announcement[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.AccountId32, v: ([peoplePolkadotV1002006.Announcement[], bigint] | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<[k: peoplePolkadotV1002006.AccountId32, v: ([peoplePolkadotV1002006.Announcement[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: ([peoplePolkadotV1002006.Announcement[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: ([peoplePolkadotV1002006.Announcement[], bigint] | undefined)][]>
}
