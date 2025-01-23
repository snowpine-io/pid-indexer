import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {SubIdentity} from '../../../model'
import { CommonContext, BlockHeader, CallItem, EventItem } from '../../types/contexts'
import {getOrCreateAccount} from "../../util/entities";

function getEventData(event: EventItem) {
    if (events.identity.subIdentityRemoved.peoplePolkadotV1002006.is(event)) {
        return events.identity.subIdentityRemoved.peoplePolkadotV1002006.decode(event)
    }
    throw new UnknownVersionError(events.identity.subIdentityRemoved.name)
}
export async function subIdentityRemoved(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<undefined> {
    const eventData = getEventData(item)

    const account = await getOrCreateAccount(ctx, eventData.sub)
    const subIdentity = await ctx.store.findOneBy(SubIdentity, {
        account: account,
    });

    if (!subIdentity) {
        throw new Error('Subidentity not found')
    }

    await ctx.store.remove(SubIdentity, subIdentity.id);

    return undefined
}
