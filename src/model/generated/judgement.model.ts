import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import {Identity} from "./identity.model"
import {Registrar} from "./registrar.model"
import {JudgementType} from "./_judgementType"

@Entity_()
export class Judgement {
    constructor(props?: Partial<Judgement>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Identity, {nullable: true})
    identity!: Identity

    @Index_()
    @ManyToOne_(() => Registrar, {nullable: true})
    registrar!: Registrar

    @Column_("varchar", {length: 10, nullable: false})
    judgement!: JudgementType

    @DateTimeColumn_({nullable: true})
    createdAt!: Date | undefined | null
}
