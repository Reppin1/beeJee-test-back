import { MigrationInterface, QueryRunner } from "typeorm"

export class addAdmin1666021957704 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
      `INSERT INTO "user" (email, password) VALUES ('admin', '123')`
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DELETE FROM "user"`);
    }
}
