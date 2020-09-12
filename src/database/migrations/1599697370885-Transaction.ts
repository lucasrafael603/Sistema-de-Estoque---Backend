import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Transaction1599697370885 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {


        await queryRunner.createTable(
            new Table({ name: 'Transaction' ,
             columns: [{ name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()'  },
             {name: 'Product_id', type: 'uuid', isNullable: false},
             {name: 'change', type: 'int', isNullable: true},
             {name: 'situation_stock', type: 'integer', isNullable: false},
             {name: 'created_at', type: 'timestamp', default: 'now()',},
             {name: 'updated_at', type: 'timestamp', default: 'now()',}, 
            ]
         
         })  
         )

        


    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        
        await queryRunner.dropTable('Transaction')
        

    }

}
