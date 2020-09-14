import {Router, response} from 'express'
import {uuid} from 'uuidv4'
import Teste from '../middlewares/Teste'
import {getRepository} from 'typeorm'
import User from '../models/User'
import CreateUserService from '../services/CreateUserService'
//import {v4} from 'v4'

const app = Router()
// interface DTO{

//   id: string,
//   name: string,
//   age: number

// }


// const array:DTO[] = []



app.get('/', async (request, response) => {

  // return response.json(array)
  const Instancia = getRepository(User)

  const AllUsers = await Instancia.find()

  return response.json(AllUsers)



})


app.post('/', async (request, response) =>{

    const {name, email, password, age } = request.body

    const Instancia = new CreateUserService()

    try{

      const newUser =  await Instancia.Execute({name, email, password})

      return response.json(newUser)
    

    }catch(err){

        return response.json({err: 'Email ja cadastrado'})

    }
    
  



})


// app.get('/:age', (request, response) => {

//     const {age} = request.params

//     const dados = array.findIndex(valor => valor.age === parseInt(age))

//   return response.json(array[dados])


// })

// app.post('/', Teste ,(request, response) => {

//   const {name, age, email, password } = request.body 

//   const id = uuid()

//   const NewUser = {

//     id,
//     name,
//     email,
//     password,
//     age

//   }

//   array.push(NewUser)


//   return response.json({NewUser})
  

  


// })




export default app