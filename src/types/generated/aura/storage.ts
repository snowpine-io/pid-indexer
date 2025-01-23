import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const authorities =  {
    /**
     *  The current authority set.
     */
    peoplePolkadotV1002006: new StorageType('Aura.Authorities', 'Default', [], sts.array(() => peoplePolkadotV1002006.Public)) as AuthoritiesPeoplePolkadotV1002006,
}

/**
 *  The current authority set.
 */
export interface AuthoritiesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.Public[]
    get(block: Block): Promise<(peoplePolkadotV1002006.Public[] | undefined)>
}

export const currentSlot =  {
    /**
     *  The current slot of this block.
     * 
     *  This will be set in `on_initialize`.
     */
    peoplePolkadotV1002006: new StorageType('Aura.CurrentSlot', 'Default', [], peoplePolkadotV1002006.Slot) as CurrentSlotPeoplePolkadotV1002006,
}

/**
 *  The current slot of this block.
 * 
 *  This will be set in `on_initialize`.
 */
export interface CurrentSlotPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.Slot
    get(block: Block): Promise<(peoplePolkadotV1002006.Slot | undefined)>
}
