import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Product1599697360512 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({ name: 'Product' ,
             columns: [{ name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()'  },
             {name: 'name', type: 'varchar', isNullable: false},
             {name: 'price', type: 'int', isNullable: false},
             {name: 'brand_id', type: 'uuid', isNullable: true}, 
             {name: 'created_at', type: 'timestamp', default: 'now()',},
             {name: 'updated_at', type: 'timestamp', default: 'now()',}, 
             
            ]
         
         })  
         )
 
        

    }


     
 

    

    public async down(queryRunner: QueryRunner): Promise<void> {

        

        await queryRunner.dropTable('Product')

    }

}
