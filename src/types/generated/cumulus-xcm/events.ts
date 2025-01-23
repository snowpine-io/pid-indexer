import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const invalidFormat =  {
    name: 'CumulusXcm.InvalidFormat',
    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    peoplePolkadotV1002006: new EventType(
        'CumulusXcm.InvalidFormat',
        sts.bytes()
    ),
}

export const unsupportedVersion =  {
    name: 'CumulusXcm.UnsupportedVersion',
    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    peoplePolkadotV1002006: new EventType(
        'CumulusXcm.UnsupportedVersion',
        sts.bytes()
    ),
}

export const executedDownward =  {
    name: 'CumulusXcm.ExecutedDownward',
    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    peoplePolkadotV1002006: new EventType(
        'CumulusXcm.ExecutedDownward',
        sts.tuple([sts.bytes(), peoplePolkadotV1002006.V4Outcome])
    ),
}
