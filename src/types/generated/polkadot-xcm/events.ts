import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const attempted =  {
    name: 'PolkadotXcm.Attempted',
    /**
     * Execution of an XCM message was attempted.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.Attempted',
        sts.struct({
            outcome: peoplePolkadotV1002006.V4Outcome,
        })
    ),
}

export const sent =  {
    name: 'PolkadotXcm.Sent',
    /**
     * A XCM message was sent.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.Sent',
        sts.struct({
            origin: peoplePolkadotV1002006.V4Location,
            destination: peoplePolkadotV1002006.V4Location,
            message: sts.array(() => peoplePolkadotV1002006.V4Instruction),
            messageId: sts.bytes(),
        })
    ),
}

export const unexpectedResponse =  {
    name: 'PolkadotXcm.UnexpectedResponse',
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.struct({
            origin: peoplePolkadotV1002006.V4Location,
            queryId: sts.bigint(),
        })
    ),
}

export const responseReady =  {
    name: 'PolkadotXcm.ResponseReady',
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: peoplePolkadotV1002006.V4Response,
        })
    ),
}

export const notified =  {
    name: 'PolkadotXcm.Notified',
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.Notified',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const notifyOverweight =  {
    name: 'PolkadotXcm.NotifyOverweight',
    /**
     * Query response has been received and query is removed. The registered notification
     * could not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.NotifyOverweight',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
            actualWeight: peoplePolkadotV1002006.Weight,
            maxBudgetedWeight: peoplePolkadotV1002006.Weight,
        })
    ),
}

export const notifyDispatchError =  {
    name: 'PolkadotXcm.NotifyDispatchError',
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.NotifyDispatchError',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const notifyDecodeFailed =  {
    name: 'PolkadotXcm.NotifyDecodeFailed',
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.NotifyDecodeFailed',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const invalidResponder =  {
    name: 'PolkadotXcm.InvalidResponder',
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.struct({
            origin: peoplePolkadotV1002006.V4Location,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => peoplePolkadotV1002006.V4Location),
        })
    ),
}

export const invalidResponderVersion =  {
    name: 'PolkadotXcm.InvalidResponderVersion',
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.struct({
            origin: peoplePolkadotV1002006.V4Location,
            queryId: sts.bigint(),
        })
    ),
}

export const responseTaken =  {
    name: 'PolkadotXcm.ResponseTaken',
    /**
     * Received query response has been read and removed.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.ResponseTaken',
        sts.struct({
            queryId: sts.bigint(),
        })
    ),
}

export const assetsTrapped =  {
    name: 'PolkadotXcm.AssetsTrapped',
    /**
     * Some assets have been placed in an asset trap.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.struct({
            hash: peoplePolkadotV1002006.H256,
            origin: peoplePolkadotV1002006.V4Location,
            assets: peoplePolkadotV1002006.VersionedAssets,
        })
    ),
}

export const versionChangeNotified =  {
    name: 'PolkadotXcm.VersionChangeNotified',
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.struct({
            destination: peoplePolkadotV1002006.V4Location,
            result: sts.number(),
            cost: sts.array(() => peoplePolkadotV1002006.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const supportedVersionChanged =  {
    name: 'PolkadotXcm.SupportedVersionChanged',
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.struct({
            location: peoplePolkadotV1002006.V4Location,
            version: sts.number(),
        })
    ),
}

export const notifyTargetSendFail =  {
    name: 'PolkadotXcm.NotifyTargetSendFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.struct({
            location: peoplePolkadotV1002006.V4Location,
            queryId: sts.bigint(),
            error: peoplePolkadotV1002006.V3Error,
        })
    ),
}

export const notifyTargetMigrationFail =  {
    name: 'PolkadotXcm.NotifyTargetMigrationFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.struct({
            location: peoplePolkadotV1002006.VersionedLocation,
            queryId: sts.bigint(),
        })
    ),
}

export const invalidQuerierVersion =  {
    name: 'PolkadotXcm.InvalidQuerierVersion',
    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.struct({
            origin: peoplePolkadotV1002006.V4Location,
            queryId: sts.bigint(),
        })
    ),
}

export const invalidQuerier =  {
    name: 'PolkadotXcm.InvalidQuerier',
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.struct({
            origin: peoplePolkadotV1002006.V4Location,
            queryId: sts.bigint(),
            expectedQuerier: peoplePolkadotV1002006.V4Location,
            maybeActualQuerier: sts.option(() => peoplePolkadotV1002006.V4Location),
        })
    ),
}

export const versionNotifyStarted =  {
    name: 'PolkadotXcm.VersionNotifyStarted',
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.struct({
            destination: peoplePolkadotV1002006.V4Location,
            cost: sts.array(() => peoplePolkadotV1002006.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const versionNotifyRequested =  {
    name: 'PolkadotXcm.VersionNotifyRequested',
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.struct({
            destination: peoplePolkadotV1002006.V4Location,
            cost: sts.array(() => peoplePolkadotV1002006.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const versionNotifyUnrequested =  {
    name: 'PolkadotXcm.VersionNotifyUnrequested',
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.struct({
            destination: peoplePolkadotV1002006.V4Location,
            cost: sts.array(() => peoplePolkadotV1002006.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const feesPaid =  {
    name: 'PolkadotXcm.FeesPaid',
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.struct({
            paying: peoplePolkadotV1002006.V4Location,
            fees: sts.array(() => peoplePolkadotV1002006.V4Asset),
        })
    ),
}

export const assetsClaimed =  {
    name: 'PolkadotXcm.AssetsClaimed',
    /**
     * Some assets have been claimed from an asset trap
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.struct({
            hash: peoplePolkadotV1002006.H256,
            origin: peoplePolkadotV1002006.V4Location,
            assets: peoplePolkadotV1002006.VersionedAssets,
        })
    ),
}

export const versionMigrationFinished =  {
    name: 'PolkadotXcm.VersionMigrationFinished',
    /**
     * A XCM version migration finished.
     */
    peoplePolkadotV1002006: new EventType(
        'PolkadotXcm.VersionMigrationFinished',
        sts.struct({
            version: sts.number(),
        })
    ),
}
