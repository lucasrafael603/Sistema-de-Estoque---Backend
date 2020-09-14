import UserRepository from '../repositories/UserRepository'
import {getRepository} from 'typeorm'
import {hash} from 'bcryptjs'
import User from '../models/User'


interface DTOUser{

  name: string
  email: string
  password: string


}


export default class CreateUserService{

     async Execute({name, email, password}: DTOUser ) {

        const InstanciaNew = getRepository(User)

       const CheckExists = await InstanciaNew.findOne({where: {email}})


          if(CheckExists){

            throw new Error('Email ja cadastrado')

          }

         
          const hashedPassword = await hash(password, 8)

          //const Instancia = new UserRepository()

          const newUser = InstanciaNew.create({name, email, password: hashedPassword})
          
          await InstanciaNew.save(newUser)

          return newUser

      }


}