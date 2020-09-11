import {Request, Response, NextFunction} from 'express'
import {Router, response} from 'express'
import {uuid} from 'uuidv4'

const ProductRouter = Router()

interface DTO{

  id: string,
  nameProduct: string,
  price: number

}

const products : DTO[] = []

ProductRouter.get('/', (request, response) => {

  return response.json(products)

})

ProductRouter.post('/', (request: Request, response: Response) => {

    const {nameProduct, brand , price} = request.body
    
      //  request.user.id = 'teste'

      // console.log(request.user.id)

    const NewProduct = {
      
      id: uuid(),
      nameProduct,
      brand,
      price
    
    }

    products.push(NewProduct)

    return response.json(NewProduct)

})

export default ProductRouter