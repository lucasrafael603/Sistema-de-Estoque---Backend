import {MigrationInterface, QueryRunner} from "typeorm";

export class Relations1599878791904 implements MigrationInterface {
    name = 'Relations1599878791904'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" integer NOT NULL, "brandId" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "brandeId" uuid, CONSTRAINT "PK_9fc040db7872192bbc26c515710" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Brand" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a4a45d0f897767860c6c8209b96" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Transaction" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "Product_id" uuid NOT NULL, "change" integer NOT NULL, "situation_stock" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_21eda4daffd2c60f76b81a270e9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "User" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Product" ADD CONSTRAINT "FK_08b7659299765af2c4f31e08028" FOREIGN KEY ("brandeId") REFERENCES "Brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Transaction" ADD CONSTRAINT "FK_8ea5deacb2ad0a6f112626e1837" FOREIGN KEY ("Product_id") REFERENCES "Product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Transaction" DROP CONSTRAINT "FK_8ea5deacb2ad0a6f112626e1837"`);
        await queryRunner.query(`ALTER TABLE "Product" DROP CONSTRAINT "FK_08b7659299765af2c4f31e08028"`);
        await queryRunner.query(`DROP TABLE "User"`);
        await queryRunner.query(`DROP TABLE "Transaction"`);
        await queryRunner.query(`DROP TABLE "Brand"`);
        await queryRunner.query(`DROP TABLE "Product"`);
    }

}
