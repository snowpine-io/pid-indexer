import assert from "assert"
import * as marshal from "./marshal"

export class Raw {
    public readonly isTypeOf = 'Raw'
    private _value!: string | undefined | null

    constructor(props?: Partial<Omit<Raw, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._value = json.value == null ? undefined : marshal.string.fromJSON(json.value)
        }
    }

    get value(): string | undefined | null {
        return this._value
    }

    set value(value: string | undefined | null) {
        this._value = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            value: this.value,
        }
    }
}
