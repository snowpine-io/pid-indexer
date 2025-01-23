import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'

export const proxyExecuted =  {
    name: 'Proxy.ProxyExecuted',
    /**
     * A proxy was executed correctly, with the given.
     */
    peoplePolkadotV1002006: new EventType(
        'Proxy.ProxyExecuted',
        sts.struct({
            result: sts.result(() => sts.unit(), () => peoplePolkadotV1002006.DispatchError),
        })
    ),
}

export const pureCreated =  {
    name: 'Proxy.PureCreated',
    /**
     * A pure account has been created by new proxy with given
     * disambiguation index and proxy type.
     */
    peoplePolkadotV1002006: new EventType(
        'Proxy.PureCreated',
        sts.struct({
            pure: peoplePolkadotV1002006.AccountId32,
            who: peoplePolkadotV1002006.AccountId32,
            proxyType: peoplePolkadotV1002006.ProxyType,
            disambiguationIndex: sts.number(),
        })
    ),
}

export const announced =  {
    name: 'Proxy.Announced',
    /**
     * An announcement was placed to make a call in the future.
     */
    peoplePolkadotV1002006: new EventType(
        'Proxy.Announced',
        sts.struct({
            real: peoplePolkadotV1002006.AccountId32,
            proxy: peoplePolkadotV1002006.AccountId32,
            callHash: peoplePolkadotV1002006.H256,
        })
    ),
}

export const proxyAdded =  {
    name: 'Proxy.ProxyAdded',
    /**
     * A proxy was added.
     */
    peoplePolkadotV1002006: new EventType(
        'Proxy.ProxyAdded',
        sts.struct({
            delegator: peoplePolkadotV1002006.AccountId32,
            delegatee: peoplePolkadotV1002006.AccountId32,
            proxyType: peoplePolkadotV1002006.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const proxyRemoved =  {
    name: 'Proxy.ProxyRemoved',
    /**
     * A proxy was removed.
     */
    peoplePolkadotV1002006: new EventType(
        'Proxy.ProxyRemoved',
        sts.struct({
            delegator: peoplePolkadotV1002006.AccountId32,
            delegatee: peoplePolkadotV1002006.AccountId32,
            proxyType: peoplePolkadotV1002006.ProxyType,
            delay: sts.number(),
        })
    ),
}
