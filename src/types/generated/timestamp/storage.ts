import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'

export const now =  {
    /**
     *  The current time for the current block.
     */
    peoplePolkadotV1002006: new StorageType('Timestamp.Now', 'Default', [], sts.bigint()) as NowPeoplePolkadotV1002006,
}

/**
 *  The current time for the current block.
 */
export interface NowPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const didUpdate =  {
    /**
     *  Whether the timestamp has been updated in this block.
     * 
     *  This value is updated to `true` upon successful submission of a timestamp by a node.
     *  It is then checked at the end of each block execution in the `on_finalize` hook.
     */
    peoplePolkadotV1002006: new StorageType('Timestamp.DidUpdate', 'Default', [], sts.boolean()) as DidUpdatePeoplePolkadotV1002006,
}

/**
 *  Whether the timestamp has been updated in this block.
 * 
 *  This value is updated to `true` upon successful submission of a timestamp by a node.
 *  It is then checked at the end of each block execution in the `on_finalize` hook.
 */
export interface DidUpdatePeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
