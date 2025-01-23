import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

export const xcmpMessageSent =  {
    name: 'XcmpQueue.XcmpMessageSent',
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    peoplePolkadotV1002006: new EventType(
        'XcmpQueue.XcmpMessageSent',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
}
