import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { calls, events } from '../../../types/generated'

import { CommonContext, BlockHeader, CallItem, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(event: EventItem) {
    if (events.identity.authorityAdded.peoplePolkadotV1002006.is(event)) {
        return events.identity.authorityAdded.peoplePolkadotV1002006.decode(event)
    }
    throw new UnknownVersionError(events.identity.authorityAdded.name)
}

function getCallData(call: CallItem) {
    if (calls.identity.addUsernameAuthority.peoplePolkadotV1002006.is(call)) {
        return calls.identity.addUsernameAuthority.peoplePolkadotV1002006.decode(call)
    }
    throw new UnknownVersionError(calls.identity.addUsernameAuthority.name)
}

export async function authorityAdded(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<undefined> {
    return undefined
}
