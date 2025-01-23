import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const identityOf =  {
    /**
     *  Information that is pertinent to identify the entity behind an account. First item is the
     *  registration, second is the account's primary username.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    peoplePolkadotV1002006: new StorageType('Identity.IdentityOf', 'Optional', [peoplePolkadotV1002006.AccountId32], sts.tuple(() => [peoplePolkadotV1002006.Registration, sts.option(() => sts.bytes())])) as IdentityOfPeoplePolkadotV1002006,
}

/**
 *  Information that is pertinent to identify the entity behind an account. First item is the
 *  registration, second is the account's primary username.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityOfPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<([peoplePolkadotV1002006.Registration, (Bytes | undefined)] | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.AccountId32[]): Promise<([peoplePolkadotV1002006.Registration, (Bytes | undefined)] | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.AccountId32, v: ([peoplePolkadotV1002006.Registration, (Bytes | undefined)] | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<[k: peoplePolkadotV1002006.AccountId32, v: ([peoplePolkadotV1002006.Registration, (Bytes | undefined)] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: ([peoplePolkadotV1002006.Registration, (Bytes | undefined)] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: ([peoplePolkadotV1002006.Registration, (Bytes | undefined)] | undefined)][]>
}

export const superOf =  {
    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    peoplePolkadotV1002006: new StorageType('Identity.SuperOf', 'Optional', [peoplePolkadotV1002006.AccountId32], sts.tuple(() => [peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.Data])) as SuperOfPeoplePolkadotV1002006,
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface SuperOfPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<([peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.Data] | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.AccountId32[]): Promise<([peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.Data] | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.AccountId32, v: ([peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.Data] | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<[k: peoplePolkadotV1002006.AccountId32, v: ([peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.Data] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: ([peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.Data] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: ([peoplePolkadotV1002006.AccountId32, peoplePolkadotV1002006.Data] | undefined)][]>
}

export const subsOf =  {
    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    peoplePolkadotV1002006: new StorageType('Identity.SubsOf', 'Default', [peoplePolkadotV1002006.AccountId32], sts.tuple(() => [sts.bigint(), sts.array(() => peoplePolkadotV1002006.AccountId32)])) as SubsOfPeoplePolkadotV1002006,
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface SubsOfPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [bigint, peoplePolkadotV1002006.AccountId32[]]
    get(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<([bigint, peoplePolkadotV1002006.AccountId32[]] | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.AccountId32[]): Promise<([bigint, peoplePolkadotV1002006.AccountId32[]] | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.AccountId32, v: ([bigint, peoplePolkadotV1002006.AccountId32[]] | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<[k: peoplePolkadotV1002006.AccountId32, v: ([bigint, peoplePolkadotV1002006.AccountId32[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: ([bigint, peoplePolkadotV1002006.AccountId32[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: ([bigint, peoplePolkadotV1002006.AccountId32[]] | undefined)][]>
}

export const registrars =  {
    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    peoplePolkadotV1002006: new StorageType('Identity.Registrars', 'Default', [], sts.array(() => sts.option(() => peoplePolkadotV1002006.RegistrarInfo))) as RegistrarsPeoplePolkadotV1002006,
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface RegistrarsPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (peoplePolkadotV1002006.RegistrarInfo | undefined)[]
    get(block: Block): Promise<((peoplePolkadotV1002006.RegistrarInfo | undefined)[] | undefined)>
}

export const usernameAuthorities =  {
    /**
     *  A map of the accounts who are authorized to grant usernames.
     */
    peoplePolkadotV1002006: new StorageType('Identity.UsernameAuthorities', 'Optional', [peoplePolkadotV1002006.AccountId32], peoplePolkadotV1002006.AuthorityProperties) as UsernameAuthoritiesPeoplePolkadotV1002006,
}

/**
 *  A map of the accounts who are authorized to grant usernames.
 */
export interface UsernameAuthoritiesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<(peoplePolkadotV1002006.AuthorityProperties | undefined)>
    getMany(block: Block, keys: peoplePolkadotV1002006.AccountId32[]): Promise<(peoplePolkadotV1002006.AuthorityProperties | undefined)[]>
    getKeys(block: Block): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeys(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<peoplePolkadotV1002006.AccountId32[]>
    getPairs(block: Block): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.AuthorityProperties | undefined)][]>
    getPairs(block: Block, key: peoplePolkadotV1002006.AccountId32): Promise<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.AuthorityProperties | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.AuthorityProperties | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: peoplePolkadotV1002006.AccountId32): AsyncIterable<[k: peoplePolkadotV1002006.AccountId32, v: (peoplePolkadotV1002006.AuthorityProperties | undefined)][]>
}

export const accountOfUsername =  {
    /**
     *  Reverse lookup from `username` to the `AccountId` that has registered it. The value should
     *  be a key in the `IdentityOf` map, but it may not if the user has cleared their identity.
     * 
     *  Multiple usernames may map to the same `AccountId`, but `IdentityOf` will only map to one
     *  primary username.
     */
    peoplePolkadotV1002006: new StorageType('Identity.AccountOfUsername', 'Optional', [sts.bytes()], peoplePolkadotV1002006.AccountId32) as AccountOfUsernamePeoplePolkadotV1002006,
}

/**
 *  Reverse lookup from `username` to the `AccountId` that has registered it. The value should
 *  be a key in the `IdentityOf` map, but it may not if the user has cleared their identity.
 * 
 *  Multiple usernames may map to the same `AccountId`, but `IdentityOf` will only map to one
 *  primary username.
 */
export interface AccountOfUsernamePeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<(peoplePolkadotV1002006.AccountId32 | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<(peoplePolkadotV1002006.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: (peoplePolkadotV1002006.AccountId32 | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: (peoplePolkadotV1002006.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: (peoplePolkadotV1002006.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: (peoplePolkadotV1002006.AccountId32 | undefined)][]>
}

export const pendingUsernames =  {
    /**
     *  Usernames that an authority has granted, but that the account controller has not confirmed
     *  that they want it. Used primarily in cases where the `AccountId` cannot provide a signature
     *  because they are a pure proxy, multisig, etc. In order to confirm it, they should call
     *  [`Call::accept_username`].
     * 
     *  First tuple item is the account and second is the acceptance deadline.
     */
    peoplePolkadotV1002006: new StorageType('Identity.PendingUsernames', 'Optional', [sts.bytes()], sts.tuple(() => [peoplePolkadotV1002006.AccountId32, sts.number()])) as PendingUsernamesPeoplePolkadotV1002006,
}

/**
 *  Usernames that an authority has granted, but that the account controller has not confirmed
 *  that they want it. Used primarily in cases where the `AccountId` cannot provide a signature
 *  because they are a pure proxy, multisig, etc. In order to confirm it, they should call
 *  [`Call::accept_username`].
 * 
 *  First tuple item is the account and second is the acceptance deadline.
 */
export interface PendingUsernamesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<([peoplePolkadotV1002006.AccountId32, number] | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<([peoplePolkadotV1002006.AccountId32, number] | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: ([peoplePolkadotV1002006.AccountId32, number] | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: ([peoplePolkadotV1002006.AccountId32, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: ([peoplePolkadotV1002006.AccountId32, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: ([peoplePolkadotV1002006.AccountId32, number] | undefined)][]>
}
