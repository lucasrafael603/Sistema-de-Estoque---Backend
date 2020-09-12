import {Request, Response, NextFunction} from 'express'
import {Router, response} from 'express'
import {uuid} from 'uuidv4'
import {getRepository} from 'typeorm'
import Product from '../models/Product'
import CreateProductService from '../services/CreateProductService'

const ProductRouter = Router()

// interface DTO{

//   id: string,
//   nameProduct: string,
//   price: number

// }

// const products : DTO[] = []

ProductRouter.get('/', async (request, response) => {

    const Instancia = getRepository(Product)

   const AllProducts = await Instancia.find()

   return response.json(AllProducts)

})

ProductRouter.post('/', async (request: Request, response: Response) => {

    const {name, price, brandId} = request.body

    const Instancia = new CreateProductService()

    try{


     const newProduct = await Instancia.Execute({name, price, brandId})


      return response.json(newProduct) 

    }
    catch(err){


            return response.json({err: 'Ocorreu algo'})

    }
    


      //  request.user.id = 'teste'

      // console.log(request.user.id)

    // const NewProduct = {
      
    //   id: uuid(),
    //   nameProduct,
    //   brand,
    //   price
    
    // }

    // products.push(NewProduct)

    // return response.json(NewProduct)

})

export default ProductRouter