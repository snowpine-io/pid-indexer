import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {Identity, Judgement, SubIdentity} from '../../../model'
import { CommonContext, BlockHeader, CallItem, EventItem } from '../../types/contexts'
import {getOrCreateAccount} from "../../util/entities";

function getEventData(event: EventItem) {
    if (events.identity.identityCleared.peoplePolkadotV1002006.is(event)) {
        return events.identity.identityCleared.peoplePolkadotV1002006.decode(event)
    }

    throw new UnknownVersionError(events.identity.identityCleared.name)
}

export async function identityCleared(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<undefined> {
    const eventData = getEventData(item)
    const account = await getOrCreateAccount(ctx, eventData.who)

    const subidentities = await ctx.store.findBy(SubIdentity, {
        identity: {
            id: account.id,
        }
    });

    if (subidentities.length > 0) {
        await ctx.store.remove(SubIdentity, subidentities.map(s => s.id));
    }

    const judgements = await ctx.store.findBy(Judgement, {
        identity: {
            id: account.id,
        }
    });

    if (judgements.length > 0) {
        await ctx.store.remove(Judgement, judgements.map(j => j.id));
    }

    await ctx.store.remove(Identity, account.id);

    return undefined
}
