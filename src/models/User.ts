//import {uuid} from 'uuidv4'
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'


@Entity('User')
class User {
  @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string


    @Column()
    email: string

    @Column()
    password: string

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


export default User
