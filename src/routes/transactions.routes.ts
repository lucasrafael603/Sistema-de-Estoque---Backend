import {response, Router} from 'express'
import {getRepository} from 'typeorm'
import Transaction from '../models/Transaction'
import CreateTransationService from '../services/CreateTransationService'

const transactionsRoutes = Router()


interface DTOTransactions{

  idProduto: string
  quantidade: number


}

transactionsRoutes.get('/', async (request, response) => {

      const Instancia = getRepository(Transaction)

      const Values = await Instancia.find()


      return response.json(Values)

})


transactionsRoutes.post( '/', async (request, response) => {

  const { idProduto, quantidade}: DTOTransactions = request.body
  
  const InstanciaTransaction = new CreateTransationService()

  const NewTransaction = await InstanciaTransaction.Execute({product_Id: idProduto, change: quantidade })

  return response.json(NewTransaction)

})

export default transactionsRoutes