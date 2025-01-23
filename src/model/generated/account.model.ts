import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, StringColumn as StringColumn_, Index as Index_, IntColumn as IntColumn_, OneToOne as OneToOne_} from "@subsquid/typeorm-store"
import {Network} from "./_network"
import {Identity} from "./identity.model"

@Entity_()
export class Account {
    constructor(props?: Partial<Account>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("varchar", {length: 8, nullable: false})
    network!: Network

    @Index_()
    @StringColumn_({nullable: false})
    address!: string

    @IntColumn_({nullable: false})
    nonce!: number

    @OneToOne_(() => Identity, e => e.account)
    identity!: Identity | undefined | null

    @IntColumn_({nullable: true})
    lastUpdateBlock!: number | undefined | null
}
