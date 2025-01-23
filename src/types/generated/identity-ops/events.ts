import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v1002006 from '../v1002006'

export const judgementsCleared =  {
    name: 'IdentityOps.JudgementsCleared',
    /**
     * The invalid judgements have been cleared.
     */
    v1002006: new EventType(
        'IdentityOps.JudgementsCleared',
        sts.struct({
            target: v1002006.AccountId32,
        })
    ),
}
