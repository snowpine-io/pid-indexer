import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const nextFeeMultiplier =  {
    peoplePolkadotV1002006: new StorageType('TransactionPayment.NextFeeMultiplier', 'Default', [], peoplePolkadotV1002006.FixedU128) as NextFeeMultiplierPeoplePolkadotV1002006,
}

export interface NextFeeMultiplierPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.FixedU128
    get(block: Block): Promise<(peoplePolkadotV1002006.FixedU128 | undefined)>
}

export const storageVersion =  {
    peoplePolkadotV1002006: new StorageType('TransactionPayment.StorageVersion', 'Default', [], peoplePolkadotV1002006.Releases) as StorageVersionPeoplePolkadotV1002006,
}

export interface StorageVersionPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.Releases
    get(block: Block): Promise<(peoplePolkadotV1002006.Releases | undefined)>
}
