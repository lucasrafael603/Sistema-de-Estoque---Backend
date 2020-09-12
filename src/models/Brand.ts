//import {uuid} from 'uuidv4'
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import Product from './Product'


@Entity('Brand')
class Brand {
  @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    // @OneToMany(type => Product, Brande => Brand )
    // products: Product[]

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


export default Brand
