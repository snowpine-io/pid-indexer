import { TypeormDatabase } from '@subsquid/typeorm-store'
import { processor } from './processor'
import { events } from './types/generated'
import * as map from './mappings'
import { BlockHeader, CommonContext, EventItem } from './mappings/types/contexts'
import {getIdentities, getRegistrars, getSubIdentities} from "./genesis";

async function handleEvents(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
): Promise<Event | undefined> {
    switch (item.name) {
        case events.identity.authorityAdded.name:
            return map.identity.events.authorityAdded(ctx, block, item)
        case events.identity.authorityRemoved.name:
            return map.identity.events.authorityRemoved(ctx, block, item)
        case events.identity.danglingUsernameRemoved.name:
            return map.identity.events.danglingUsernameRemoved(ctx, block, item)
        case events.identity.identityCleared.name:
            return map.identity.events.identityCleared(ctx, block, item)
        case events.identity.identityKilled.name:
            return map.identity.events.identityKilled(ctx, block, item)
        case events.identity.identitySet.name:
            return map.identity.events.identitySet(ctx, block, item)
        case events.identity.judgementGiven.name:
            return map.identity.events.judgementGiven(ctx, block, item)
        case events.identity.judgementRequested.name:
            return map.identity.events.judgementRequested(ctx, block, item)
        case events.identity.judgementUnrequested.name:
            return map.identity.events.judgementUnrequested(ctx, block, item)
        case events.identity.preapprovalExpired.name:
            return map.identity.events.preapprovalExpired(ctx, block, item)
        case events.identity.primaryUsernameSet.name:
            return map.identity.events.primaryUsernameSet(ctx, block, item)
        case events.identity.registrarAdded.name:
            return map.identity.events.registrarAdded(ctx, block, item)
        case events.identity.subIdentityAdded.name:
            return map.identity.events.subIdentityAdded(ctx, block, item)
        case events.identity.subIdentityRemoved.name:
            return map.identity.events.subIdentityRemoved(ctx, block, item)
        case events.identity.subIdentityRevoked.name:
            return map.identity.events.subIdentityRevoked(ctx, block, item)
        case events.identity.usernameQueued.name:
            return map.identity.events.usernameQueued(ctx, block, item)
        case events.identity.usernameSet.name:
            return map.identity.events.usernameSet(ctx, block, item)
        default: {
            ctx.log.error(`Event not handled: ${item.name}`)
            return undefined
        }
    }
}

processor.run(
    new TypeormDatabase({
    isolationLevel: 'SERIALIZABLE',
    supportHotBlocks: true,
    stateSchema: process.env.NETWORK,
}), async (ctx) => {
    for (let block of ctx.blocks) {
        if (block.header.height === 0) {
            await getRegistrars(ctx, block.header)
            await getIdentities(ctx, block.header)
            await getSubIdentities(ctx, block.header)
        }

        for (let eventItem of block.events) {
            await handleEvents(ctx as unknown as CommonContext, block.header, eventItem)
        }
    }
})