import {uuid} from 'uuidv4'
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'

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
    brandId : string
    // brand_id: string


  

    // @ManyToOne(type => Brand, products => Product)
    // //@JoinColumn( {name: 'brand_id', referencedColumnName: 'id' } )
    // Brande : Brand

    @ManyToOne(() => Brand)
    @JoinColumn({ name: 'brandId'})
    Brand: Brand


    

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
