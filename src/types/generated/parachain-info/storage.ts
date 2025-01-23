import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const parachainId =  {
    peoplePolkadotV1002006: new StorageType('ParachainInfo.ParachainId', 'Default', [], peoplePolkadotV1002006.Id) as ParachainIdPeoplePolkadotV1002006,
}

export interface ParachainIdPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.Id
    get(block: Block): Promise<(peoplePolkadotV1002006.Id | undefined)>
}
