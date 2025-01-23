import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    peoplePolkadotV1002006: new StorageType('Balances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuancePeoplePolkadotV1002006,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuancePeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    peoplePolkadotV1002006: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuancePeoplePolkadotV1002006,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuancePeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const account =  {
    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    peoplePolkadotV1002006: new StorageType('Balances.Account', 'Default', [peoplePolkadotV1002006.AccountId32], peoplePolkadotV1002006.AccountData) as AccountPeoplePolkadotV1002006,
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.AccountData
    get(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<(peoplePolkadotV1002006.AccountData | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.AccountId32[]): Promise<(peoplePolkadotV1002006.AccountData | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.AccountData | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.AccountData | undefined)][]>
}

export const locks =  {
    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    peoplePolkadotV1002006: new StorageType('Balances.Locks', 'Default', [peoplePolkadotV1002006.AccountId32], sts.array(() => peoplePolkadotV1002006.BalanceLock)) as LocksPeoplePolkadotV1002006,
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface LocksPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.BalanceLock[]
    get(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<(peoplePolkadotV1002006.BalanceLock[] | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.AccountId32[]): Promise<(peoplePolkadotV1002006.BalanceLock[] | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.BalanceLock[] | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.BalanceLock[] | undefined)][]>
}

export const reserves =  {
    /**
     *  Named reserves on some account balances.
     */
    peoplePolkadotV1002006: new StorageType('Balances.Reserves', 'Default', [peoplePolkadotV1002006.AccountId32], sts.array(() => peoplePolkadotV1002006.ReserveData)) as ReservesPeoplePolkadotV1002006,
}

/**
 *  Named reserves on some account balances.
 */
export interface ReservesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.ReserveData[]
    get(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<(peoplePolkadotV1002006.ReserveData[] | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.AccountId32[]): Promise<(peoplePolkadotV1002006.ReserveData[] | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.ReserveData[] | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.ReserveData[] | undefined)][]>
}

export const holds =  {
    /**
     *  Holds on account balances.
     */
    peoplePolkadotV1002006: new StorageType('Balances.Holds', 'Default', [peoplePolkadotV1002006.AccountId32], sts.array(() => peoplePolkadotV1002006.IdAmount)) as HoldsPeoplePolkadotV1002006,
}

/**
 *  Holds on account balances.
 */
export interface HoldsPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.IdAmount[]
    get(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<(peoplePolkadotV1002006.IdAmount[] | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.AccountId32[]): Promise<(peoplePolkadotV1002006.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.IdAmount[] | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.IdAmount[] | undefined)][]>
}

export const freezes =  {
    /**
     *  Freeze locks on account balances.
     */
    peoplePolkadotV1002006: new StorageType('Balances.Freezes', 'Default', [peoplePolkadotV1002006.AccountId32], sts.array(() => peoplePolkadotV1002006.Type_210)) as FreezesPeoplePolkadotV1002006,
}

/**
 *  Freeze locks on account balances.
 */
export interface FreezesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.Type_210[]
    get(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<(peoplePolkadotV1002006.Type_210[] | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.AccountId32[]): Promise<(peoplePolkadotV1002006.Type_210[] | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.Type_210[] | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.Type_210[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.Type_210[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.Type_210[] | undefined)][]>
}
