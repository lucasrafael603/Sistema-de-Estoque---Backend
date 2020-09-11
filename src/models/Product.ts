//import {uuid} from 'uuidv4'
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'

import Brand from './Brand'

@Entity('Product')
class Product {
  @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string


    @Column()
    price: number

    @Column()
    brand_id: string

    @ManyToOne(() => Brand)
    @JoinColumn( {name: 'brand_id'} )
    brandIdentity : Brand
    

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


export default Product
