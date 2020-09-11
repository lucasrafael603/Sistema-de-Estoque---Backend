//import {uuid} from 'uuidv4'
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'

import Product from './Product'

@Entity('Transaction')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    Product_id: string

    @ManyToOne(() => Product)
    @JoinColumn( {name: 'Product_id'} )
    id_Product : Product


    @Column()
    change: number

    @Column()
    situation_stock: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date




   /* constructor({name,age, date}: Omit<Appointment, 'id'>){
      this.id = uuid()
      this.name = name
      this.age = age
      this.date = date

    }*/

}


export default Transaction
