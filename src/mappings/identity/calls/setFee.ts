import { UnknownVersionError } from '../../../common/errors'

import { CommonContext, CallItem, BlockHeader } from '../../types/contexts'
import { identity } from '../../../types/generated/calls'

function getCallData(call: CallItem) {
    if (identity.addRegistrar.peoplePolkadotV1002006.is(call)) {
        return identity.addRegistrar.peoplePolkadotV1002006.decode(call)
    }
    throw new UnknownVersionError(identity.addRegistrar.name)
}

export async function setFee(ctx: CommonContext, block: BlockHeader, item: CallItem): Promise<undefined> {
    const callData = getCallData(item)
    return undefined
}
