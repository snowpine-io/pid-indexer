import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { calls, events } from '../../../types/generated'
import {Identity, Judgement, JudgementType, Registrar} from '../../../model'
import { CommonContext, BlockHeader, CallItem, EventItem } from '../../types/contexts'
import {currentNetwork, getOrCreateAccount} from "../../util/entities";

function getEventData(event: EventItem) {
    if (events.identity.judgementUnrequested.peoplePolkadotV1002006.is(event)) {
        return events.identity.judgementUnrequested.peoplePolkadotV1002006.decode(event)
    }
    throw new UnknownVersionError(events.identity.judgementUnrequested.name)
}

export async function judgementUnrequested(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<undefined> {
    const eventData = getEventData(item)
    const identity = await ctx.store.findOneBy(Identity, {
        account: {
            id: `${currentNetwork(ctx).toLowerCase()}:${eventData.who}`,
        }
    })

    if (!identity) {
        throw new Error('Account has no identity')
    }

    const judgements = await ctx.store.findBy(Judgement, {
        judgement: JudgementType.FeePaid,
        identity: identity
    });

    if (judgements.length > 0) {
        await ctx.store.remove(Judgement, judgements.map(j => j.id));
    }

    return undefined
}
