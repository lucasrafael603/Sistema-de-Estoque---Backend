import {Request, Response, NextFunction} from 'express'
import {Router, response} from 'express'
import {uuid} from 'uuidv4'
import CreateBrandService from '../services/CreateBrandService'
import {getRepository} from 'typeorm'
import Brand from '../models/Brand'

const BrandRouter = Router()

// interface DTO{

//   id: string,
//   nameProduct: string,
//   price: number

// }

// const products : DTO[] = []

// BrandRouter.get('/', (request, response) => {

//   return response.json(products)

BrandRouter.get('/', async (request, response) => {

    const Instancia = getRepository(Brand)

    const AllBrands = await Instancia.find()

    console.log(AllBrands)


    return response.json(AllBrands)


})



BrandRouter.post('/', async (request: Request, response: Response) => {

    const {name} = request.body
    
      //  request.user.id = 'teste'

      // console.log(request.user.id)
      const Instancia = new CreateBrandService()


      try{

        const newBrand = await Instancia.Execute({name})


        return response.json(newBrand)

      }
      catch(err){

        return response.json({err: 'Brand Already Exists' })

      }
     

    

})

export default BrandRouter