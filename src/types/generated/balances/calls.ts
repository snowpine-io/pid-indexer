import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const transferAllowDeath =  {
    name: 'Balances.transfer_allow_death',
    /**
     * See [`Pallet::transfer_allow_death`].
     */
    peoplePolkadotV1002006: new CallType(
        'Balances.transfer_allow_death',
        sts.struct({
            dest: peoplePolkadotV1002006.MultiAddress,
            value: sts.bigint(),
        })
    ),
}

export const forceTransfer =  {
    name: 'Balances.force_transfer',
    /**
     * See [`Pallet::force_transfer`].
     */
    peoplePolkadotV1002006: new CallType(
        'Balances.force_transfer',
        sts.struct({
            source: peoplePolkadotV1002006.MultiAddress,
            dest: peoplePolkadotV1002006.MultiAddress,
            value: sts.bigint(),
        })
    ),
}

export const transferKeepAlive =  {
    name: 'Balances.transfer_keep_alive',
    /**
     * See [`Pallet::transfer_keep_alive`].
     */
    peoplePolkadotV1002006: new CallType(
        'Balances.transfer_keep_alive',
        sts.struct({
            dest: peoplePolkadotV1002006.MultiAddress,
            value: sts.bigint(),
        })
    ),
}

export const transferAll =  {
    name: 'Balances.transfer_all',
    /**
     * See [`Pallet::transfer_all`].
     */
    peoplePolkadotV1002006: new CallType(
        'Balances.transfer_all',
        sts.struct({
            dest: peoplePolkadotV1002006.MultiAddress,
            keepAlive: sts.boolean(),
        })
    ),
}

export const forceUnreserve =  {
    name: 'Balances.force_unreserve',
    /**
     * See [`Pallet::force_unreserve`].
     */
    peoplePolkadotV1002006: new CallType(
        'Balances.force_unreserve',
        sts.struct({
            who: peoplePolkadotV1002006.MultiAddress,
            amount: sts.bigint(),
        })
    ),
}

export const upgradeAccounts =  {
    name: 'Balances.upgrade_accounts',
    /**
     * See [`Pallet::upgrade_accounts`].
     */
    peoplePolkadotV1002006: new CallType(
        'Balances.upgrade_accounts',
        sts.struct({
            who: sts.array(() => peoplePolkadotV1002006.AccountId32),
        })
    ),
}

export const forceSetBalance =  {
    name: 'Balances.force_set_balance',
    /**
     * See [`Pallet::force_set_balance`].
     */
    peoplePolkadotV1002006: new CallType(
        'Balances.force_set_balance',
        sts.struct({
            who: peoplePolkadotV1002006.MultiAddress,
            newFree: sts.bigint(),
        })
    ),
}

export const forceAdjustTotalIssuance =  {
    name: 'Balances.force_adjust_total_issuance',
    /**
     * See [`Pallet::force_adjust_total_issuance`].
     */
    peoplePolkadotV1002006: new CallType(
        'Balances.force_adjust_total_issuance',
        sts.struct({
            direction: peoplePolkadotV1002006.AdjustmentDirection,
            delta: sts.bigint(),
        })
    ),
}

export const burn =  {
    name: 'Balances.burn',
    /**
     * Burn the specified liquid free balance from the origin account.
     * 
     * If the origin's account ends up below the existential deposit as a result
     * of the burn and `keep_alive` is false, the account will be reaped.
     * 
     * Unlike sending funds to a _burn_ address, which merely makes the funds inaccessible,
     * this `burn` operation will reduce total issuance by the amount _burned_.
     */
    peoplePolkadotV1003000: new CallType(
        'Balances.burn',
        sts.struct({
            value: sts.bigint(),
            keepAlive: sts.boolean(),
        })
    ),
}
