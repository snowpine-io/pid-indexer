import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { calls, events } from '../../../types/generated'
import {Identity, Judgement, Registrar} from '../../../model'
import { CommonContext, BlockHeader, CallItem, EventItem } from '../../types/contexts'
import {currentNetwork, getJudgementType } from "../../util/entities";

function getEventData(event: EventItem) {
    if (events.identity.judgementGiven.peoplePolkadotV1002006.is(event)) {
        return events.identity.judgementGiven.peoplePolkadotV1002006.decode(event)
    }
    throw new UnknownVersionError(events.identity.identitySet.name)
}

function getCallData(call: CallItem) {
    if (calls.identity.provideJudgement.peoplePolkadotV1002006.is(call)) {
        return calls.identity.provideJudgement.peoplePolkadotV1002006.decode(call)
    }
    throw new UnknownVersionError(calls.identity.setIdentity.name)
}

export async function judgementGiven(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<undefined> {
    if (!item.call) throw new CallNotDefinedError()

    const eventData = getEventData(item)
    const callData = getCallData(item.call)
    const registrar = await ctx.store.findOneOrFail(Registrar, {
        where: {
            index: eventData.registrarIndex,
        }
    });

    const identity = await ctx.store.findOneBy(Identity, {
        account: {
            id: `${currentNetwork(ctx).toLowerCase()}:${eventData.target}`,
        }
    })

    if (!identity) {
        throw new Error('Account has no identity')
    }

    const judgement = new Judgement({
        id: `${registrar.index}:${identity.id}:${block.height}`,
        identity: identity,
        registrar: registrar,
        judgement: getJudgementType(callData.judgement),
        createdAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(judgement)

    return undefined
}
