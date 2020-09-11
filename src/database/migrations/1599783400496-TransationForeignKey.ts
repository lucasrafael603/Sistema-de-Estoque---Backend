import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class TransationForeignKey1599783400496 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createForeignKey('Transaction', new TableForeignKey(
            {
                name: 'ProductIdentity',
                columnNames: ['Product_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'Product',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE', 
                 
                
            }

         )
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey('Transaction', 'ProductIdentity')

    }

}
