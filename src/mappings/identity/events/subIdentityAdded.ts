import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { calls, events } from '../../../types/generated'
import {Identity, SubIdentity} from '../../../model'
import { CommonContext, BlockHeader, CallItem, EventItem } from '../../types/contexts'
import {currentNetwork, getOrCreateAccount, unwrapData} from "../../util/entities";

function getEventData(event: EventItem) {
    if (events.identity.subIdentityAdded.peoplePolkadotV1002006.is(event)) {
        return events.identity.subIdentityAdded.peoplePolkadotV1002006.decode(event)
    }
    throw new UnknownVersionError(events.identity.subIdentityAdded.name)
}

function getCallData(call: CallItem) {
    if (calls.identity.addSub.peoplePolkadotV1002006.is(call)) {
        return calls.identity.addSub.peoplePolkadotV1002006.decode(call)
    }
    throw new UnknownVersionError(calls.identity.addSub.name)
}

export async function subIdentityAdded(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<undefined> {
    if (!item.call) throw new CallNotDefinedError()

    const eventData = getEventData(item)
    const callData = getCallData(item.call)
    const account = await getOrCreateAccount(ctx, eventData.sub)
    const identity = await ctx.store.findOneBy(Identity, {
        account: {
            id: `${currentNetwork(ctx).toLowerCase()}:${eventData.main}`,
        }
    })

    if (!identity) {
        throw new Error('Account has no identity')
    }

    const subIdentity = new SubIdentity({
        id: `${identity.id}:${eventData.sub}`,
        account: account,
        identity: identity,
        name: unwrapData(callData.data),
        createdAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(subIdentity)

    return undefined
}
