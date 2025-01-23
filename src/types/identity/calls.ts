import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1030 from '../v1030'
import * as v1032 from '../v1032'

export const setIdentity =  {
    name: 'Identity.set_identity',
    /**
     *  Set an account's identity information and reserve the appropriate deposit.
     * 
     *  If the account already has identity information, the deposit is taken as part payment
     *  for the new deposit.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  identity.
     * 
     *  - `info`: The identity information.
     * 
     *  Emits `IdentitySet` if successful.
     * 
     *  # <weight>
     *  - `O(X + R)` where `X` additional-field-count (deposit-bounded).
     *  - At most two balance operations.
     *  - One storage mutation (codec `O(X + R)`).
     *  - One event.
     *  # </weight>
     */
    v1030: new CallType(
        'Identity.set_identity',
        sts.struct({
            info: v1030.IdentityInfo,
        })
    ),
    /**
     *  Set an account's identity information and reserve the appropriate deposit.
     * 
     *  If the account already has identity information, the deposit is taken as part payment
     *  for the new deposit.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  identity.
     * 
     *  - `info`: The identity information.
     * 
     *  Emits `IdentitySet` if successful.
     * 
     *  # <weight>
     *  - `O(X + R)` where `X` additional-field-count (deposit-bounded).
     *  - At most two balance operations.
     *  - One storage mutation (codec `O(X + R)`).
     *  - One event.
     *  # </weight>
     */
    v1032: new CallType(
        'Identity.set_identity',
        sts.struct({
            info: v1032.IdentityInfo,
        })
    ),
}

export const clearIdentity =  {
    name: 'Identity.clear_identity',
    /**
     *  Clear an account's identity info and all sub-account and return all deposits.
     * 
     *  Payment: All reserved balances on the account are returned.
     * 
     *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
     *  identity.
     * 
     *  Emits `IdentityCleared` if successful.
     * 
     *  # <weight>
     *  - `O(R + S + X)`.
     *  - One balance-reserve operation.
     *  - Two storage mutations.
     *  - One event.
     *  # </weight>
     */
    v1030: new CallType(
        'Identity.clear_identity',
        sts.unit()
    ),
}
