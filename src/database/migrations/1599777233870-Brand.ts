import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Brand1599777233870 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {


        await queryRunner.createTable(
            new Table({ name: 'Brand' ,
             columns: [{ name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()'  },
             {name: 'name', type: 'varchar', isNullable: false , isUnique: true},
             {name: 'created_at', type: 'timestamp', default: 'now()',},
             {name: 'updated_at', type: 'timestamp', default: 'now()',}, 
             
            ]
         
         })  
         )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

            await queryRunner.dropTable('Brand')
    }

}
