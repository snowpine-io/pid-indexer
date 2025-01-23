import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const authorities =  {
    /**
     *  Serves as cache for the authorities.
     * 
     *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
     *  but we require the old authorities to verify the seal when validating a PoV. This will
     *  always be updated to the latest AuRa authorities in `on_finalize`.
     */
    peoplePolkadotV1002006: new StorageType('AuraExt.Authorities', 'Default', [], sts.array(() => peoplePolkadotV1002006.Public)) as AuthoritiesPeoplePolkadotV1002006,
}

/**
 *  Serves as cache for the authorities.
 * 
 *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
 *  but we require the old authorities to verify the seal when validating a PoV. This will
 *  always be updated to the latest AuRa authorities in `on_finalize`.
 */
export interface AuthoritiesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.Public[]
    get(block: Block): Promise<(peoplePolkadotV1002006.Public[] | undefined)>
}

export const slotInfo =  {
    /**
     *  Current slot paired with a number of authored blocks.
     * 
     *  Updated on each block initialization.
     */
    peoplePolkadotV1002006: new StorageType('AuraExt.SlotInfo', 'Optional', [], sts.tuple(() => [peoplePolkadotV1002006.Slot, sts.number()])) as SlotInfoPeoplePolkadotV1002006,
}

/**
 *  Current slot paired with a number of authored blocks.
 * 
 *  Updated on each block initialization.
 */
export interface SlotInfoPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([peoplePolkadotV1002006.Slot, number] | undefined)>
}
