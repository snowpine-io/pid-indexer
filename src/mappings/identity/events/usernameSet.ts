import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { calls, events } from '../../../types/generated'
import { CommonContext, BlockHeader, CallItem, EventItem } from '../../types/contexts'

function getEventData(event: EventItem) {
    if (events.identity.usernameSet.peoplePolkadotV1002006.is(event)) {
        return events.identity.usernameSet.peoplePolkadotV1002006.decode(event)
    }
    throw new UnknownVersionError(events.identity.usernameSet.name)
}

export async function usernameSet(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<undefined> {
    return undefined
}
