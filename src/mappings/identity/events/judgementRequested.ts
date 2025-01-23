import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import { Identity, Judgement, JudgementType, Registrar} from '../../../model'
import { CommonContext, BlockHeader, CallItem, EventItem } from '../../types/contexts'
import {currentNetwork} from "../../util/entities";

function getEventData(event: EventItem) {
    if (events.identity.judgementRequested.peoplePolkadotV1002006.is(event)) {
        return events.identity.judgementRequested.peoplePolkadotV1002006.decode(event)
    }
    throw new UnknownVersionError(events.identity.judgementRequested.name)
}

export async function judgementRequested(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<undefined> {
    const eventData = getEventData(item)
    const identity = await ctx.store.findOneBy(Identity, {
        account: {
            id: `${currentNetwork(ctx).toLowerCase()}:${eventData.who}`,
        }
    })

    if (!identity) {
        throw new Error('Account has no identity')
    }

    const registrar = await ctx.store.findOneOrFail(Registrar, {
        where: {
            index: eventData.registrarIndex,
        }
    });

    const judgement = new Judgement({
        id: `${registrar.index}:${identity.id}:${block.height}`,
        identity: identity,
        registrar: registrar,
        judgement: JudgementType.FeePaid,
        createdAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(judgement)

    return undefined
}
