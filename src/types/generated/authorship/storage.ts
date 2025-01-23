import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const author =  {
    /**
     *  Author of current block.
     */
    peoplePolkadotV1002006: new StorageType('Authorship.Author', 'Optional', [], peoplePolkadotV1002006.AccountId32) as AuthorPeoplePolkadotV1002006,
}

/**
 *  Author of current block.
 */
export interface AuthorPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(peoplePolkadotV1002006.AccountId32 | undefined)>
}
