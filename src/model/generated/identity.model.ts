import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToOne as OneToOne_, Index as Index_, JoinColumn as JoinColumn_, StringColumn as StringColumn_, OneToMany as OneToMany_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {Network} from "./_network"
import {Account} from "./account.model"
import {Data, fromJsonData} from "./_data"
import {SubIdentity} from "./subIdentity.model"
import {Judgement} from "./judgement.model"

@Entity_()
export class Identity {
    constructor(props?: Partial<Identity>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("varchar", {length: 8, nullable: false})
    network!: Network

    @Index_({unique: true})
    @OneToOne_(() => Account, {nullable: true})
    @JoinColumn_()
    account!: Account

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonData(obj)}, nullable: true})
    display!: Data | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonData(obj)}, nullable: true})
    legal!: Data | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonData(obj)}, nullable: true})
    web!: Data | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonData(obj)}, nullable: true})
    matrix!: Data | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonData(obj)}, nullable: true})
    email!: Data | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonData(obj)}, nullable: true})
    twitter!: Data | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonData(obj)}, nullable: true})
    image!: Data | undefined | null

    @StringColumn_({nullable: true})
    pgpFingerprint!: string | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonData(obj)}, nullable: true})
    github!: Data | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonData(obj)}, nullable: true})
    discord!: Data | undefined | null

    @OneToMany_(() => SubIdentity, e => e.identity)
    subidentities!: SubIdentity[]

    @OneToMany_(() => Judgement, e => e.identity)
    judgements!: Judgement[]

    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
