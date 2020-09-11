import {Router} from 'express'


const transactionsRoutes = Router()


transactionsRoutes.post( '/', (request, response) => {

  const { idProduto, quantidade} = request.body

  return response.json({ok: 'true'})

}  )

export default transactionsRoutes