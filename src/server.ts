import express from 'express'
import index from './routes/index'
import cors from 'cors'
import './database'
import  'reflect-metadata'

const app = express()

app.use(cors())
app.use(express.json())



app.use(index)
// app.get('/teste', (request, response) => {

//   return response.json({message: 'true'})

// })


app.listen(3333,  () => { console.log('O servidor iniciou') })


