import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const unincludedSegment =  {
    /**
     *  Latest included block descendants the runtime accepted. In other words, these are
     *  ancestors of the currently executing block which have not been included in the observed
     *  relay-chain state.
     * 
     *  The segment length is limited by the capacity returned from the [`ConsensusHook`] configured
     *  in the pallet.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.UnincludedSegment', 'Default', [], sts.array(() => peoplePolkadotV1002006.Ancestor)) as UnincludedSegmentPeoplePolkadotV1002006,
}

/**
 *  Latest included block descendants the runtime accepted. In other words, these are
 *  ancestors of the currently executing block which have not been included in the observed
 *  relay-chain state.
 * 
 *  The segment length is limited by the capacity returned from the [`ConsensusHook`] configured
 *  in the pallet.
 */
export interface UnincludedSegmentPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.Ancestor[]
    get(block: Block): Promise<(peoplePolkadotV1002006.Ancestor[] | undefined)>
}

export const aggregatedUnincludedSegment =  {
    /**
     *  Storage field that keeps track of bandwidth used by the unincluded segment along with the
     *  latest HRMP watermark. Used for limiting the acceptance of new blocks with
     *  respect to relay chain constraints.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.AggregatedUnincludedSegment', 'Optional', [], peoplePolkadotV1002006.SegmentTracker) as AggregatedUnincludedSegmentPeoplePolkadotV1002006,
}

/**
 *  Storage field that keeps track of bandwidth used by the unincluded segment along with the
 *  latest HRMP watermark. Used for limiting the acceptance of new blocks with
 *  respect to relay chain constraints.
 */
export interface AggregatedUnincludedSegmentPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(peoplePolkadotV1002006.SegmentTracker | undefined)>
}

export const pendingValidationCode =  {
    /**
     *  In case of a scheduled upgrade, this storage field contains the validation code to be
     *  applied.
     * 
     *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the
     *  [`:code`][sp_core::storage::well_known_keys::CODE] which will result the next block process
     *  with the new validation code. This concludes the upgrade process.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.PendingValidationCode', 'Default', [], sts.bytes()) as PendingValidationCodePeoplePolkadotV1002006,
}

/**
 *  In case of a scheduled upgrade, this storage field contains the validation code to be
 *  applied.
 * 
 *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the
 *  [`:code`][sp_core::storage::well_known_keys::CODE] which will result the next block process
 *  with the new validation code. This concludes the upgrade process.
 */
export interface PendingValidationCodePeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block): Promise<(Bytes | undefined)>
}

export const newValidationCode =  {
    /**
     *  Validation code that is set by the parachain and is to be communicated to collator and
     *  consequently the relay-chain.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.NewValidationCode', 'Optional', [], sts.bytes()) as NewValidationCodePeoplePolkadotV1002006,
}

/**
 *  Validation code that is set by the parachain and is to be communicated to collator and
 *  consequently the relay-chain.
 * 
 *  This will be cleared in `on_initialize` of each new block if no other pallet already set
 *  the value.
 */
export interface NewValidationCodePeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(Bytes | undefined)>
}

export const validationData =  {
    /**
     *  The [`PersistedValidationData`] set for this block.
     *  This value is expected to be set only once per block and it's never stored
     *  in the trie.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.ValidationData', 'Optional', [], peoplePolkadotV1002006.V6PersistedValidationData) as ValidationDataPeoplePolkadotV1002006,
}

/**
 *  The [`PersistedValidationData`] set for this block.
 *  This value is expected to be set only once per block and it's never stored
 *  in the trie.
 */
export interface ValidationDataPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(peoplePolkadotV1002006.V6PersistedValidationData | undefined)>
}

export const didSetValidationCode =  {
    /**
     *  Were the validation data set to notify the relay chain?
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.DidSetValidationCode', 'Default', [], sts.boolean()) as DidSetValidationCodePeoplePolkadotV1002006,
}

/**
 *  Were the validation data set to notify the relay chain?
 */
export interface DidSetValidationCodePeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const lastRelayChainBlockNumber =  {
    /**
     *  The relay chain block number associated with the last parachain block.
     * 
     *  This is updated in `on_finalize`.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.LastRelayChainBlockNumber', 'Default', [], sts.number()) as LastRelayChainBlockNumberPeoplePolkadotV1002006,
}

/**
 *  The relay chain block number associated with the last parachain block.
 * 
 *  This is updated in `on_finalize`.
 */
export interface LastRelayChainBlockNumberPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const upgradeRestrictionSignal =  {
    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.UpgradeRestrictionSignal', 'Default', [], sts.option(() => peoplePolkadotV1002006.V6UpgradeRestriction)) as UpgradeRestrictionSignalPeoplePolkadotV1002006,
}

/**
 *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
 *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
 *  candidate will be invalid.
 * 
 *  This storage item is a mirror of the corresponding value for the current parachain from the
 *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
 *  set after the inherent.
 */
export interface UpgradeRestrictionSignalPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (peoplePolkadotV1002006.V6UpgradeRestriction | undefined)
    get(block: Block): Promise<((peoplePolkadotV1002006.V6UpgradeRestriction | undefined) | undefined)>
}

export const upgradeGoAhead =  {
    /**
     *  Optional upgrade go-ahead signal from the relay-chain.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.UpgradeGoAhead', 'Default', [], sts.option(() => peoplePolkadotV1002006.V6UpgradeGoAhead)) as UpgradeGoAheadPeoplePolkadotV1002006,
}

/**
 *  Optional upgrade go-ahead signal from the relay-chain.
 * 
 *  This storage item is a mirror of the corresponding value for the current parachain from the
 *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
 *  set after the inherent.
 */
export interface UpgradeGoAheadPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (peoplePolkadotV1002006.V6UpgradeGoAhead | undefined)
    get(block: Block): Promise<((peoplePolkadotV1002006.V6UpgradeGoAhead | undefined) | undefined)>
}

export const relayStateProof =  {
    /**
     *  The state proof for the last relay parent block.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.RelayStateProof', 'Optional', [], peoplePolkadotV1002006.StorageProof) as RelayStateProofPeoplePolkadotV1002006,
}

/**
 *  The state proof for the last relay parent block.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface RelayStateProofPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(peoplePolkadotV1002006.StorageProof | undefined)>
}

export const relevantMessagingState =  {
    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.RelevantMessagingState', 'Optional', [], peoplePolkadotV1002006.MessagingStateSnapshot) as RelevantMessagingStatePeoplePolkadotV1002006,
}

/**
 *  The snapshot of some state related to messaging relevant to the current parachain as per
 *  the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface RelevantMessagingStatePeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(peoplePolkadotV1002006.MessagingStateSnapshot | undefined)>
}

export const hostConfiguration =  {
    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.HostConfiguration', 'Optional', [], peoplePolkadotV1002006.V6AbridgedHostConfiguration) as HostConfigurationPeoplePolkadotV1002006,
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface HostConfigurationPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(peoplePolkadotV1002006.V6AbridgedHostConfiguration | undefined)>
}

export const lastDmqMqcHead =  {
    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.LastDmqMqcHead', 'Default', [], peoplePolkadotV1002006.MessageQueueChain) as LastDmqMqcHeadPeoplePolkadotV1002006,
}

/**
 *  The last downward message queue chain head we have observed.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface LastDmqMqcHeadPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.MessageQueueChain
    get(block: Block): Promise<(peoplePolkadotV1002006.MessageQueueChain | undefined)>
}

export const lastHrmpMqcHeads =  {
    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.LastHrmpMqcHeads', 'Default', [], sts.array(() => sts.tuple(() => [peoplePolkadotV1002006.Id, peoplePolkadotV1002006.MessageQueueChain]))) as LastHrmpMqcHeadsPeoplePolkadotV1002006,
}

/**
 *  The message queue chain heads we have observed per each channel incoming channel.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface LastHrmpMqcHeadsPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [peoplePolkadotV1002006.Id, peoplePolkadotV1002006.MessageQueueChain][]
    get(block: Block): Promise<([peoplePolkadotV1002006.Id, peoplePolkadotV1002006.MessageQueueChain][] | undefined)>
}

export const processedDownwardMessages =  {
    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.ProcessedDownwardMessages', 'Default', [], sts.number()) as ProcessedDownwardMessagesPeoplePolkadotV1002006,
}

/**
 *  Number of downward messages processed in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ProcessedDownwardMessagesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const hrmpWatermark =  {
    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.HrmpWatermark', 'Default', [], sts.number()) as HrmpWatermarkPeoplePolkadotV1002006,
}

/**
 *  HRMP watermark that was set in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface HrmpWatermarkPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const hrmpOutboundMessages =  {
    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.HrmpOutboundMessages', 'Default', [], sts.array(() => peoplePolkadotV1002006.OutboundHrmpMessage)) as HrmpOutboundMessagesPeoplePolkadotV1002006,
}

/**
 *  HRMP messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface HrmpOutboundMessagesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.OutboundHrmpMessage[]
    get(block: Block): Promise<(peoplePolkadotV1002006.OutboundHrmpMessage[] | undefined)>
}

export const upwardMessages =  {
    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.UpwardMessages', 'Default', [], sts.array(() => sts.bytes())) as UpwardMessagesPeoplePolkadotV1002006,
}

/**
 *  Upward messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface UpwardMessagesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<(Bytes[] | undefined)>
}

export const pendingUpwardMessages =  {
    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.PendingUpwardMessages', 'Default', [], sts.array(() => sts.bytes())) as PendingUpwardMessagesPeoplePolkadotV1002006,
}

/**
 *  Upward messages that are still pending and not yet send to the relay chain.
 */
export interface PendingUpwardMessagesPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<(Bytes[] | undefined)>
}

export const upwardDeliveryFeeFactor =  {
    /**
     *  The factor to multiply the base delivery fee by for UMP.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.UpwardDeliveryFeeFactor', 'Default', [], peoplePolkadotV1002006.FixedU128) as UpwardDeliveryFeeFactorPeoplePolkadotV1002006,
}

/**
 *  The factor to multiply the base delivery fee by for UMP.
 */
export interface UpwardDeliveryFeeFactorPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): peoplePolkadotV1002006.FixedU128
    get(block: Block): Promise<(peoplePolkadotV1002006.FixedU128 | undefined)>
}

export const announcedHrmpMessagesPerCandidate =  {
    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.AnnouncedHrmpMessagesPerCandidate', 'Default', [], sts.number()) as AnnouncedHrmpMessagesPerCandidatePeoplePolkadotV1002006,
}

/**
 *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
 *  announcing the weight of `on_initialize` and `on_finalize`.
 */
export interface AnnouncedHrmpMessagesPerCandidatePeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const reservedXcmpWeightOverride =  {
    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.ReservedXcmpWeightOverride', 'Optional', [], peoplePolkadotV1002006.Weight) as ReservedXcmpWeightOverridePeoplePolkadotV1002006,
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ReservedXcmpWeightOverridePeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(peoplePolkadotV1002006.Weight | undefined)>
}

export const reservedDmpWeightOverride =  {
    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.ReservedDmpWeightOverride', 'Optional', [], peoplePolkadotV1002006.Weight) as ReservedDmpWeightOverridePeoplePolkadotV1002006,
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ReservedDmpWeightOverridePeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(peoplePolkadotV1002006.Weight | undefined)>
}

export const customValidationHeadData =  {
    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See `Pallet::set_custom_validation_head_data` for more information.
     */
    peoplePolkadotV1002006: new StorageType('ParachainSystem.CustomValidationHeadData', 'Optional', [], sts.bytes()) as CustomValidationHeadDataPeoplePolkadotV1002006,
}

/**
 *  A custom head data that should be returned as result of `validate_block`.
 * 
 *  See `Pallet::set_custom_validation_head_data` for more information.
 */
export interface CustomValidationHeadDataPeoplePolkadotV1002006  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(Bytes | undefined)>
}
