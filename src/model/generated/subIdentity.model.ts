import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {Data, fromJsonData} from "./_data"
import {Account} from "./account.model"
import {Identity} from "./identity.model"

@Entity_()
export class SubIdentity {
    constructor(props?: Partial<SubIdentity>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonData(obj)}, nullable: true})
    name!: Data | undefined | null

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @Index_()
    @ManyToOne_(() => Identity, {nullable: true})
    identity!: Identity

    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
