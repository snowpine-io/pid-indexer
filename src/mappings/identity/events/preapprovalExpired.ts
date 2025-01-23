import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { calls, events } from '../../../types/generated'

import { CommonContext, BlockHeader, CallItem, EventItem } from '../../types/contexts'

function getEventData(event: EventItem) {
    if (events.identity.preapprovalExpired.peoplePolkadotV1002006.is(event)) {
        return events.identity.preapprovalExpired.peoplePolkadotV1002006.decode(event)
    }
    throw new UnknownVersionError(events.identity.preapprovalExpired.name)
}

export async function preapprovalExpired(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<undefined> {
    return undefined
}
