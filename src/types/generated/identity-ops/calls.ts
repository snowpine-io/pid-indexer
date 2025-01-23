import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1002006 from '../v1002006'

export const clearJudgement =  {
    name: 'IdentityOps.clear_judgement',
    /**
     * See [`Pallet::clear_judgement`].
     */
    v1002006: new CallType(
        'IdentityOps.clear_judgement',
        sts.struct({
            target: v1002006.AccountId32,
        })
    ),
}
