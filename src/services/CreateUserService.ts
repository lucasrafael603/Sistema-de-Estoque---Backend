import UserRepository from '../repositories/UserRepository'
import {hash} from 'bcryptjs'


interface DTOUser{

  name: string
  age: number
  email: string
  password: string


}


export default class CreateUserService{

     async Execute({name, email, password}: DTOUser ) {

          if(email){

            throw new Error('Email ja cadastrado')

          }

         
          const hashedPassword = await hash(password, 8)

          const Instancia = new UserRepository()

          const newUser = Instancia.create({name, email, password: hashedPassword})
          
          await Instancia.save(newUser)

          return newUser

      }


}