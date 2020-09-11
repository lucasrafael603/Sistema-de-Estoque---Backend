import {Router, response} from 'express'
import {uuid} from 'uuidv4'
import Teste from '../middlewares/Teste'
//import {v4} from 'v4'

const app = Router()
interface DTO{

  id: string,
  name: string,
  age: number

}


const array:DTO[] = []



app.get('/', (request, response) => {

  return response.json(array)


})


app.get('/:age', (request, response) => {

    const {age} = request.params

    const dados = array.findIndex(valor => valor.age === parseInt(age))

  return response.json(array[dados])


})

app.post('/', Teste ,(request, response) => {

  const {name, age, email, password } = request.body 

  const id = uuid()

  const NewUser = {

    id,
    name,
    email,
    password,
    age

  }

  array.push(NewUser)


  return response.json({NewUser})
  

  


})




export default app