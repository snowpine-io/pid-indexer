import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1002000 from '../v1002000'
import * as v1002004 from '../v1002004'
import * as peoplePolkadotV1002006 from '../peoplePolkadotV1002006'
import * as v1002006 from '../v1002006'
import * as peoplePolkadotV1003000 from '../peoplePolkadotV1003000'
import * as v1003000 from '../v1003000'

export const proxy =  {
    name: 'Proxy.proxy',
    /**
     * See [`Pallet::proxy`].
     */
    peoplePolkadotV1002006: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: peoplePolkadotV1002006.MultiAddress,
            forceProxyType: sts.option(() => peoplePolkadotV1002006.ProxyType),
            call: peoplePolkadotV1002006.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    peoplePolkadotV1003000: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: peoplePolkadotV1003000.MultiAddress,
            forceProxyType: sts.option(() => peoplePolkadotV1003000.ProxyType),
            call: peoplePolkadotV1003000.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v1002000: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v1002000.MultiAddress,
            forceProxyType: sts.option(() => v1002000.ProxyType),
            call: v1002000.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v1002004: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v1002004.MultiAddress,
            forceProxyType: sts.option(() => v1002004.ProxyType),
            call: v1002004.Call,
        })
    ),
    /**
     * See [`Pallet::proxy`].
     */
    v1002006: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v1002006.MultiAddress,
            forceProxyType: sts.option(() => v1002006.ProxyType),
            call: v1002006.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v1003000: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: v1003000.MultiAddress,
            forceProxyType: sts.option(() => v1003000.ProxyType),
            call: v1003000.Call,
        })
    ),
}

export const addProxy =  {
    name: 'Proxy.add_proxy',
    /**
     * See [`Pallet::add_proxy`].
     */
    peoplePolkadotV1002006: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: peoplePolkadotV1002006.MultiAddress,
            proxyType: peoplePolkadotV1002006.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const removeProxy =  {
    name: 'Proxy.remove_proxy',
    /**
     * See [`Pallet::remove_proxy`].
     */
    peoplePolkadotV1002006: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: peoplePolkadotV1002006.MultiAddress,
            proxyType: peoplePolkadotV1002006.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const removeProxies =  {
    name: 'Proxy.remove_proxies',
    /**
     * See [`Pallet::remove_proxies`].
     */
    peoplePolkadotV1002006: new CallType(
        'Proxy.remove_proxies',
        sts.unit()
    ),
}

export const createPure =  {
    name: 'Proxy.create_pure',
    /**
     * See [`Pallet::create_pure`].
     */
    peoplePolkadotV1002006: new CallType(
        'Proxy.create_pure',
        sts.struct({
            proxyType: peoplePolkadotV1002006.ProxyType,
            delay: sts.number(),
            index: sts.number(),
        })
    ),
}

export const killPure =  {
    name: 'Proxy.kill_pure',
    /**
     * See [`Pallet::kill_pure`].
     */
    peoplePolkadotV1002006: new CallType(
        'Proxy.kill_pure',
        sts.struct({
            spawner: peoplePolkadotV1002006.MultiAddress,
            proxyType: peoplePolkadotV1002006.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
}

export const announce =  {
    name: 'Proxy.announce',
    /**
     * See [`Pallet::announce`].
     */
    peoplePolkadotV1002006: new CallType(
        'Proxy.announce',
        sts.struct({
            real: peoplePolkadotV1002006.MultiAddress,
            callHash: peoplePolkadotV1002006.H256,
        })
    ),
}

export const removeAnnouncement =  {
    name: 'Proxy.remove_announcement',
    /**
     * See [`Pallet::remove_announcement`].
     */
    peoplePolkadotV1002006: new CallType(
        'Proxy.remove_announcement',
        sts.struct({
            real: peoplePolkadotV1002006.MultiAddress,
            callHash: peoplePolkadotV1002006.H256,
        })
    ),
}

export const rejectAnnouncement =  {
    name: 'Proxy.reject_announcement',
    /**
     * See [`Pallet::reject_announcement`].
     */
    peoplePolkadotV1002006: new CallType(
        'Proxy.reject_announcement',
        sts.struct({
            delegate: peoplePolkadotV1002006.MultiAddress,
            callHash: peoplePolkadotV1002006.H256,
        })
    ),
}

export const proxyAnnounced =  {
    name: 'Proxy.proxy_announced',
    /**
     * See [`Pallet::proxy_announced`].
     */
    peoplePolkadotV1002006: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: peoplePolkadotV1002006.MultiAddress,
            real: peoplePolkadotV1002006.MultiAddress,
            forceProxyType: sts.option(() => peoplePolkadotV1002006.ProxyType),
            call: peoplePolkadotV1002006.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    peoplePolkadotV1003000: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: peoplePolkadotV1003000.MultiAddress,
            real: peoplePolkadotV1003000.MultiAddress,
            forceProxyType: sts.option(() => peoplePolkadotV1003000.ProxyType),
            call: peoplePolkadotV1003000.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v1002000: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v1002000.MultiAddress,
            real: v1002000.MultiAddress,
            forceProxyType: sts.option(() => v1002000.ProxyType),
            call: v1002000.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v1002004: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v1002004.MultiAddress,
            real: v1002004.MultiAddress,
            forceProxyType: sts.option(() => v1002004.ProxyType),
            call: v1002004.Call,
        })
    ),
    /**
     * See [`Pallet::proxy_announced`].
     */
    v1002006: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v1002006.MultiAddress,
            real: v1002006.MultiAddress,
            forceProxyType: sts.option(() => v1002006.ProxyType),
            call: v1002006.Call,
        })
    ),
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    v1003000: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: v1003000.MultiAddress,
            real: v1003000.MultiAddress,
            forceProxyType: sts.option(() => v1003000.ProxyType),
            call: v1003000.Call,
        })
    ),
}
