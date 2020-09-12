import {getRepository} from 'typeorm'
import { convertTypeAcquisitionFromJson } from 'typescript'
import Product from '../models/Product'
import Brand from '../models/Brand'
import FunctionConcat from '../functions/concat'
import {uuid} from 'uuidv4'

interface DTOProduct{

name: string
price: number
brand_id: string

}

interface Teste{

  ProductName: string | undefined

}

export default class CreateProductService{


      async Execute({name, price, brand_id}: DTOProduct ){

          const InstanciaProduct = getRepository(Product)
          const InstanciaBrand = getRepository(Brand)
        
        const ProductFinded = await InstanciaProduct.find({where: {name}})
        const BrandFinded = await InstanciaBrand.findOne({where: {brand_id}})
        
        

        if(ProductFinded){



          const ProductName = ProductFinded
          // const BrandName = BrandFinded

        //  const ConvertString = BrandName?.toString()

      //   if(ProductName == undefined){

      //     return 'Error'

      // }

      if(!BrandFinded) {

           throw new Error('Error Brand not exists')

      }
    //   if(BrandName == undefined){

    //     return 'Error'

    // }
          const ProductExists = ProductName.find((Products) => Products.brand_id == BrandFinded.id )

          //  const Verificar = FunctionConcat({ , BrandName: ConvertString })

              return ProductExists

        }
          
          const newProduct = InstanciaProduct.create({name, price, brand_id})

            await InstanciaProduct.save(newProduct)

          return newProduct

        }

}