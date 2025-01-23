import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { calls, events } from '../../../types/generated'
import {SubIdentity} from '../../../model'
import { CommonContext, BlockHeader, CallItem, EventItem } from '../../types/contexts'

function getEventData(event: EventItem) {
    if (events.identity.subIdentityRevoked.peoplePolkadotV1002006.is(event)) {
        return events.identity.subIdentityRevoked.peoplePolkadotV1002006.decode(event)
    }
    throw new UnknownVersionError(events.identity.subIdentityRevoked.name)
}

export async function subIdentityRevoked(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<undefined> {
    const eventData = getEventData(item)

    const subIdentity = await ctx.store.findOne(SubIdentity, {
        where: {
            id: `${eventData.main}:${eventData.sub}`,
        }
    });

    if (!subIdentity) {
        throw new Error('Subidentity not found')
    }

    await ctx.store.remove(SubIdentity, subIdentity.id);

    return undefined
}
