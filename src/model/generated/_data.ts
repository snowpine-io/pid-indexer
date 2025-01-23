import {BlakeTwo256} from "./_blakeTwo256"
import {Keccak256} from "./_keccak256"
import {Raw} from "./_raw"
import {Sha256} from "./_sha256"
import {ShaThree256} from "./_shaThree256"

export type Data = BlakeTwo256 | Keccak256 | Raw | Sha256 | ShaThree256

export function fromJsonData(json: any): Data {
    switch(json?.isTypeOf) {
        case 'BlakeTwo256': return new BlakeTwo256(undefined, json)
        case 'Keccak256': return new Keccak256(undefined, json)
        case 'Raw': return new Raw(undefined, json)
        case 'Sha256': return new Sha256(undefined, json)
        case 'ShaThree256': return new ShaThree256(undefined, json)
        default: throw new TypeError('Unknown json object passed as Data')
    }
}
