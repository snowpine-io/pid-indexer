import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const validationFunctionStored =  {
    name: 'ParachainSystem.ValidationFunctionStored',
    /**
     * The validation function has been scheduled to apply.
     */
    peoplePolkadotV1002006: new EventType(
        'ParachainSystem.ValidationFunctionStored',
        sts.unit()
    ),
}

export const validationFunctionApplied =  {
    name: 'ParachainSystem.ValidationFunctionApplied',
    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    peoplePolkadotV1002006: new EventType(
        'ParachainSystem.ValidationFunctionApplied',
        sts.struct({
            relayChainBlockNum: sts.number(),
        })
    ),
}

export const validationFunctionDiscarded =  {
    name: 'ParachainSystem.ValidationFunctionDiscarded',
    /**
     * The relay-chain aborted the upgrade process.
     */
    peoplePolkadotV1002006: new EventType(
        'ParachainSystem.ValidationFunctionDiscarded',
        sts.unit()
    ),
}

export const downwardMessagesReceived =  {
    name: 'ParachainSystem.DownwardMessagesReceived',
    /**
     * Some downward messages have been received and will be processed.
     */
    peoplePolkadotV1002006: new EventType(
        'ParachainSystem.DownwardMessagesReceived',
        sts.struct({
            count: sts.number(),
        })
    ),
}

export const downwardMessagesProcessed =  {
    name: 'ParachainSystem.DownwardMessagesProcessed',
    /**
     * Downward messages were processed using the given weight.
     */
    peoplePolkadotV1002006: new EventType(
        'ParachainSystem.DownwardMessagesProcessed',
        sts.struct({
            weightUsed: peoplePolkadotV1002006.Weight,
            dmqHead: peoplePolkadotV1002006.H256,
        })
    ),
}

export const upwardMessageSent =  {
    name: 'ParachainSystem.UpwardMessageSent',
    /**
     * An upward message was sent to the relay chain.
     */
    peoplePolkadotV1002006: new EventType(
        'ParachainSystem.UpwardMessageSent',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
        })
    ),
}
