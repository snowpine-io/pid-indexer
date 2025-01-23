import { UnknownVersionError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {Registrar} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { identity } from '../../../types/generated/storage'
import {getOrCreateAccount} from "../../util/entities";

function getEventData(event: EventItem) {
    if (events.identity.registrarAdded.peoplePolkadotV1002006.is(event)) {
        return events.identity.registrarAdded.peoplePolkadotV1002006.decode(event)
    }
    throw new UnknownVersionError(events.identity.registrarAdded.name)
}

export async function registrarAdded(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<undefined> {
    const eventData = getEventData(item)

    const getStorage = () => {
        if (identity.registrars.peoplePolkadotV1002006.is(block)) {
            return identity.registrars.peoplePolkadotV1002006
        }
        throw new Error('Unknown storage version')
    }

    const storage = await getStorage().get(block)
    if (storage === undefined || storage.length === 0) {
        return
    }

    const registrarInfo = storage[eventData.registrarIndex]
    if (registrarInfo === undefined) {
        return
    }

    const account = await getOrCreateAccount(ctx, registrarInfo.account)
    const registrar = new Registrar({
        id: account.id,
        index: eventData.registrarIndex,
        account: account,
        identity: account.identity,
        fee: 0n,
        fields: 0n,
        createdAt: new Date(block.timestamp ?? 0),
    })

    await ctx.store.save(registrar);

    return undefined
}
