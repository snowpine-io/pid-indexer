import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const setValidationData =  {
    name: 'ParachainSystem.set_validation_data',
    /**
     * See [`Pallet::set_validation_data`].
     */
    peoplePolkadotV1002006: new CallType(
        'ParachainSystem.set_validation_data',
        sts.struct({
            data: peoplePolkadotV1002006.ParachainInherentData,
        })
    ),
}

export const sudoSendUpwardMessage =  {
    name: 'ParachainSystem.sudo_send_upward_message',
    /**
     * See [`Pallet::sudo_send_upward_message`].
     */
    peoplePolkadotV1002006: new CallType(
        'ParachainSystem.sudo_send_upward_message',
        sts.struct({
            message: sts.bytes(),
        })
    ),
}

export const authorizeUpgrade =  {
    name: 'ParachainSystem.authorize_upgrade',
    /**
     * See [`Pallet::authorize_upgrade`].
     */
    peoplePolkadotV1002006: new CallType(
        'ParachainSystem.authorize_upgrade',
        sts.struct({
            codeHash: peoplePolkadotV1002006.H256,
            checkVersion: sts.boolean(),
        })
    ),
}

export const enactAuthorizedUpgrade =  {
    name: 'ParachainSystem.enact_authorized_upgrade',
    /**
     * See [`Pallet::enact_authorized_upgrade`].
     */
    peoplePolkadotV1002006: new CallType(
        'ParachainSystem.enact_authorized_upgrade',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}
