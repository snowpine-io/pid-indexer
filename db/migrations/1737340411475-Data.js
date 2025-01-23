module.exports = class Data1737340411475 {
    name = 'Data1737340411475'

    async up(db) {
        await db.query(`CREATE TABLE "sub_identity" ("id" character varying NOT NULL, "name" jsonb, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "account_id" character varying, "identity_id" character varying, CONSTRAINT "PK_11d0d1c557b7c9ee76420c51b32" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_60bfbb0c3d38d9df54b626a2ec" ON "sub_identity" ("account_id") `)
        await db.query(`CREATE INDEX "IDX_e52887ef5c374d8dc83e01ee9c" ON "sub_identity" ("identity_id") `)
        await db.query(`CREATE TABLE "registrar" ("id" character varying NOT NULL, "index" integer NOT NULL, "fee" numeric NOT NULL, "fields" numeric NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "account_id" character varying, "identity_id" character varying, CONSTRAINT "PK_2d7bb9639e37cbd75296d2183b2" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_468ca168db0480ba0354b8a394" ON "registrar" ("account_id") `)
        await db.query(`CREATE INDEX "IDX_190f2074990e2e297c42e788fa" ON "registrar" ("identity_id") `)
        await db.query(`CREATE TABLE "judgement" ("id" character varying NOT NULL, "judgement" character varying(10) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE, "identity_id" character varying, "registrar_id" character varying, CONSTRAINT "PK_99667adcd9b4ba11ee00b59445d" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_b213d33459dadabb45d8a3021b" ON "judgement" ("identity_id") `)
        await db.query(`CREATE INDEX "IDX_fbfca402e42403ee3c68187e90" ON "judgement" ("registrar_id") `)
        await db.query(`CREATE TABLE "identity" ("id" character varying NOT NULL, "network" character varying(8) NOT NULL, "display" jsonb, "legal" jsonb, "web" jsonb, "matrix" jsonb, "email" jsonb, "twitter" jsonb, "image" jsonb, "pgp_fingerprint" text, "github" jsonb, "discord" jsonb, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "account_id" character varying, CONSTRAINT "REL_bafa9e6c71c3f69cef6602a809" UNIQUE ("account_id"), CONSTRAINT "PK_ff16a44186b286d5e626178f726" PRIMARY KEY ("id"))`)
        await db.query(`CREATE UNIQUE INDEX "IDX_bafa9e6c71c3f69cef6602a809" ON "identity" ("account_id") `)
        await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "network" character varying(8) NOT NULL, "address" text NOT NULL, "nonce" integer NOT NULL, "last_update_block" integer, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_83603c168bc00b20544539fbea" ON "account" ("address") `)
        await db.query(`ALTER TABLE "sub_identity" ADD CONSTRAINT "FK_60bfbb0c3d38d9df54b626a2ecc" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "sub_identity" ADD CONSTRAINT "FK_e52887ef5c374d8dc83e01ee9c3" FOREIGN KEY ("identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "registrar" ADD CONSTRAINT "FK_468ca168db0480ba0354b8a3942" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "registrar" ADD CONSTRAINT "FK_190f2074990e2e297c42e788fa4" FOREIGN KEY ("identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "judgement" ADD CONSTRAINT "FK_b213d33459dadabb45d8a3021be" FOREIGN KEY ("identity_id") REFERENCES "identity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "judgement" ADD CONSTRAINT "FK_fbfca402e42403ee3c68187e904" FOREIGN KEY ("registrar_id") REFERENCES "registrar"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "identity" ADD CONSTRAINT "FK_bafa9e6c71c3f69cef6602a8095" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "sub_identity"`)
        await db.query(`DROP INDEX "public"."IDX_60bfbb0c3d38d9df54b626a2ec"`)
        await db.query(`DROP INDEX "public"."IDX_e52887ef5c374d8dc83e01ee9c"`)
        await db.query(`DROP TABLE "registrar"`)
        await db.query(`DROP INDEX "public"."IDX_468ca168db0480ba0354b8a394"`)
        await db.query(`DROP INDEX "public"."IDX_190f2074990e2e297c42e788fa"`)
        await db.query(`DROP TABLE "judgement"`)
        await db.query(`DROP INDEX "public"."IDX_b213d33459dadabb45d8a3021b"`)
        await db.query(`DROP INDEX "public"."IDX_fbfca402e42403ee3c68187e90"`)
        await db.query(`DROP TABLE "identity"`)
        await db.query(`DROP INDEX "public"."IDX_bafa9e6c71c3f69cef6602a809"`)
        await db.query(`DROP TABLE "account"`)
        await db.query(`DROP INDEX "public"."IDX_83603c168bc00b20544539fbea"`)
        await db.query(`ALTER TABLE "sub_identity" DROP CONSTRAINT "FK_60bfbb0c3d38d9df54b626a2ecc"`)
        await db.query(`ALTER TABLE "sub_identity" DROP CONSTRAINT "FK_e52887ef5c374d8dc83e01ee9c3"`)
        await db.query(`ALTER TABLE "registrar" DROP CONSTRAINT "FK_468ca168db0480ba0354b8a3942"`)
        await db.query(`ALTER TABLE "registrar" DROP CONSTRAINT "FK_190f2074990e2e297c42e788fa4"`)
        await db.query(`ALTER TABLE "judgement" DROP CONSTRAINT "FK_b213d33459dadabb45d8a3021be"`)
        await db.query(`ALTER TABLE "judgement" DROP CONSTRAINT "FK_fbfca402e42403ee3c68187e904"`)
        await db.query(`ALTER TABLE "identity" DROP CONSTRAINT "FK_bafa9e6c71c3f69cef6602a8095"`)
    }
}
