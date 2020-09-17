import {getRepository} from 'typeorm'
import { convertTypeAcquisitionFromJson, createNoSubstitutionTemplateLiteral } from 'typescript'
import Product from '../models/Product'
import Brand from '../models/Brand'
import FunctionConcat from '../functions/concat'
import {uuid} from 'uuidv4'

interface DTOProduct{

name: string
price: number
brandName: string

}


export default class CreateProductService{


      async Execute({name, price, brandName}: DTOProduct ){

          const InstanciaProduct = getRepository(Product)
          const InstanciaBrand = getRepository(Brand)


          

          const BrandFinded = await InstanciaBrand.findOne({where: {name: brandName} } )

          if(!BrandFinded){

            throw new Error('Brand Not exists')

          }

          const brandId = BrandFinded?.id
          
        
        const ProductFinded = await InstanciaProduct.findOne({where: {name}})
        //const BrandFinded = await InstanciaBrand.find()
        const ProductFindedBrand = await InstanciaProduct.findOne({where: {brandId}})

       // const Looking = BrandFinded.findIndex((Brand) => Brand.id == brandId )
        
        //console.log(ProductFinded,BrandFinded)

        // if(ProductFinded && Looking < 0){

        //   throw new Error('Error Brand not exists')

        // }
        
          //console.log(ProductFinded)
       

        if(ProductFinded && ProductFindedBrand){
          
          
          throw new Error('Produto com esta marca ja existente')

        }


        //  const ProductName = ProductFinded
          // const BrandName = BrandFinded

        //  const ConvertString = BrandName?.toString()

      //   if(ProductName == undefined){

      //     return 'Error'

      // }

      // if( Looking >= 0) {

      //      throw new Error('Error Brand not exists')

      // }
    //   if(BrandName == undefined){

    //     return 'Error'

    // }
          //const ProductExists = ProductName.find((Products) => Products.brandId == BrandFinded.id )

          //  const Verificar = FunctionConcat({ , BrandName: ConvertString })

             // return ProductExists

        
          
          const newProduct = InstanciaProduct.create({name, price, brandId: brandId })

            await InstanciaProduct.save(newProduct)

          return newProduct

        }

}