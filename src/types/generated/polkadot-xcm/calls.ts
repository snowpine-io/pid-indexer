import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const send =  {
    name: 'PolkadotXcm.send',
    /**
     * See [`Pallet::send`].
     */
    peoplePolkadotV1002006: new CallType(
        'PolkadotXcm.send',
        sts.struct({
            dest: peoplePolkadotV1002006.VersionedLocation,
            message: peoplePolkadotV1002006.VersionedXcm,
        })
    ),
}

export const teleportAssets =  {
    name: 'PolkadotXcm.teleport_assets',
    /**
     * See [`Pallet::teleport_assets`].
     */
    peoplePolkadotV1002006: new CallType(
        'PolkadotXcm.teleport_assets',
        sts.struct({
            dest: peoplePolkadotV1002006.VersionedLocation,
            beneficiary: peoplePolkadotV1002006.VersionedLocation,
            assets: peoplePolkadotV1002006.VersionedAssets,
            feeAssetItem: sts.number(),
        })
    ),
}

export const reserveTransferAssets =  {
    name: 'PolkadotXcm.reserve_transfer_assets',
    /**
     * See [`Pallet::reserve_transfer_assets`].
     */
    peoplePolkadotV1002006: new CallType(
        'PolkadotXcm.reserve_transfer_assets',
        sts.struct({
            dest: peoplePolkadotV1002006.VersionedLocation,
            beneficiary: peoplePolkadotV1002006.VersionedLocation,
            assets: peoplePolkadotV1002006.VersionedAssets,
            feeAssetItem: sts.number(),
        })
    ),
}

export const execute =  {
    name: 'PolkadotXcm.execute',
    /**
     * See [`Pallet::execute`].
     */
    peoplePolkadotV1002006: new CallType(
        'PolkadotXcm.execute',
        sts.struct({
            message: peoplePolkadotV1002006.Type_295,
            maxWeight: peoplePolkadotV1002006.Weight,
        })
    ),
}

export const forceXcmVersion =  {
    name: 'PolkadotXcm.force_xcm_version',
    /**
     * See [`Pallet::force_xcm_version`].
     */
    peoplePolkadotV1002006: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: peoplePolkadotV1002006.V4Location,
            version: sts.number(),
        })
    ),
}

export const forceDefaultXcmVersion =  {
    name: 'PolkadotXcm.force_default_xcm_version',
    /**
     * See [`Pallet::force_default_xcm_version`].
     */
    peoplePolkadotV1002006: new CallType(
        'PolkadotXcm.force_default_xcm_version',
        sts.struct({
            maybeXcmVersion: sts.option(() => sts.number()),
        })
    ),
}

export const forceSubscribeVersionNotify =  {
    name: 'PolkadotXcm.force_subscribe_version_notify',
    /**
     * See [`Pallet::force_subscribe_version_notify`].
     */
    peoplePolkadotV1002006: new CallType(
        'PolkadotXcm.force_subscribe_version_notify',
        sts.struct({
            location: peoplePolkadotV1002006.VersionedLocation,
        })
    ),
}

export const forceUnsubscribeVersionNotify =  {
    name: 'PolkadotXcm.force_unsubscribe_version_notify',
    /**
     * See [`Pallet::force_unsubscribe_version_notify`].
     */
    peoplePolkadotV1002006: new CallType(
        'PolkadotXcm.force_unsubscribe_version_notify',
        sts.struct({
            location: peoplePolkadotV1002006.VersionedLocation,
        })
    ),
}

export const limitedReserveTransferAssets =  {
    name: 'PolkadotXcm.limited_reserve_transfer_assets',
    /**
     * See [`Pallet::limited_reserve_transfer_assets`].
     */
    peoplePolkadotV1002006: new CallType(
        'PolkadotXcm.limited_reserve_transfer_assets',
        sts.struct({
            dest: peoplePolkadotV1002006.VersionedLocation,
            beneficiary: peoplePolkadotV1002006.VersionedLocation,
            assets: peoplePolkadotV1002006.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: peoplePolkadotV1002006.V3WeightLimit,
        })
    ),
}

export const limitedTeleportAssets =  {
    name: 'PolkadotXcm.limited_teleport_assets',
    /**
     * See [`Pallet::limited_teleport_assets`].
     */
    peoplePolkadotV1002006: new CallType(
        'PolkadotXcm.limited_teleport_assets',
        sts.struct({
            dest: peoplePolkadotV1002006.VersionedLocation,
            beneficiary: peoplePolkadotV1002006.VersionedLocation,
            assets: peoplePolkadotV1002006.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: peoplePolkadotV1002006.V3WeightLimit,
        })
    ),
}

export const forceSuspension =  {
    name: 'PolkadotXcm.force_suspension',
    /**
     * See [`Pallet::force_suspension`].
     */
    peoplePolkadotV1002006: new CallType(
        'PolkadotXcm.force_suspension',
        sts.struct({
            suspended: sts.boolean(),
        })
    ),
}

export const transferAssets =  {
    name: 'PolkadotXcm.transfer_assets',
    /**
     * See [`Pallet::transfer_assets`].
     */
    peoplePolkadotV1002006: new CallType(
        'PolkadotXcm.transfer_assets',
        sts.struct({
            dest: peoplePolkadotV1002006.VersionedLocation,
            beneficiary: peoplePolkadotV1002006.VersionedLocation,
            assets: peoplePolkadotV1002006.VersionedAssets,
            feeAssetItem: sts.number(),
            weightLimit: peoplePolkadotV1002006.V3WeightLimit,
        })
    ),
}

export const claimAssets =  {
    name: 'PolkadotXcm.claim_assets',
    /**
     * See [`Pallet::claim_assets`].
     */
    peoplePolkadotV1002006: new CallType(
        'PolkadotXcm.claim_assets',
        sts.struct({
            assets: peoplePolkadotV1002006.VersionedAssets,
            beneficiary: peoplePolkadotV1002006.VersionedLocation,
        })
    ),
}

export const transferAssetsUsingTypeAndThen =  {
    name: 'PolkadotXcm.transfer_assets_using_type_and_then',
    /**
     * See [`Pallet::transfer_assets_using_type_and_then`].
     */
    peoplePolkadotV1002006: new CallType(
        'PolkadotXcm.transfer_assets_using_type_and_then',
        sts.struct({
            dest: peoplePolkadotV1002006.VersionedLocation,
            assets: peoplePolkadotV1002006.VersionedAssets,
            assetsTransferType: peoplePolkadotV1002006.TransferType,
            remoteFeesId: peoplePolkadotV1002006.VersionedAssetId,
            feesTransferType: peoplePolkadotV1002006.TransferType,
            customXcmOnDest: peoplePolkadotV1002006.VersionedXcm,
            weightLimit: peoplePolkadotV1002006.V3WeightLimit,
        })
    ),
}
