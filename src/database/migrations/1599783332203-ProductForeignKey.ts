import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class ProductForeignKey1599783332203 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createForeignKey('Product', new TableForeignKey(
            {
                name: 'BrandIdentity',
                columnNames: ['brandId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'Brand',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE', 
                 
                
            }

         ))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropForeignKey('Product','BrandIdentity')

    }

}
