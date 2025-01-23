import { assertNotNull } from '@subsquid/util-internal'
import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { events } from './types/generated'

function getRpc(network: string|undefined) {
    if (network === 'polkadot') {
        return process.env.POLKADOT_RPC_ENDPOINT ?? ''
    }
    return process.env.KUSAMA_RPC_ENDPOINT ?? ''
}

const substrateBatchProcessor = new SubstrateBatchProcessor()
    .setRpcEndpoint({
        url: getRpc(process.env.NETWORK),
    })
    .addEvent({
        name: [
            events.identity.identitySet.name,
            events.identity.identityCleared.name,
            events.identity.identityKilled.name,
            events.identity.judgementRequested.name,
            events.identity.judgementUnrequested.name,
            events.identity.judgementGiven.name,
            events.identity.registrarAdded.name,
            events.identity.subIdentityAdded.name,
            events.identity.subIdentityRemoved.name,
            events.identity.subIdentityRevoked.name,
        ],
        extrinsic: true,
        stack: true,
        call: true,
    })
    .setFields({
        block: {
            timestamp: true,
            validator: true,
        },
        call: {
            origin: true,
            success: true,
            args: true,
            name: true,
            error: true,
        },
        extrinsic: {
            fee: true,
            hash: true,
            tip: true,
            signature: true,
            version: true,
            success: true,
            error: true,
            name: true,
        },
    })

export const processor = process.env.NETWORK === 'polkadot' ? substrateBatchProcessor.setGateway(assertNotNull(process.env.POLKADOT_ARCHIVE_ENDPOINT, 'No gateway endpoint supplied')) : substrateBatchProcessor
