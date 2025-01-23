import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, IntColumn as IntColumn_, ManyToOne as ManyToOne_, Index as Index_, BigIntColumn as BigIntColumn_, OneToMany as OneToMany_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {Account} from "./account.model"
import {Identity} from "./identity.model"
import {Judgement} from "./judgement.model"

@Entity_()
export class Registrar {
    constructor(props?: Partial<Registrar>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @IntColumn_({nullable: false})
    index!: number

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @Index_()
    @ManyToOne_(() => Identity, {nullable: true})
    identity!: Identity | undefined | null

    @BigIntColumn_({nullable: false})
    fee!: bigint

    @BigIntColumn_({nullable: false})
    fields!: bigint

    @OneToMany_(() => Judgement, e => e.registrar)
    judgements!: Judgement[]

    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
