import Product from "../models/Product";
import {uuid} from 'uuidv4'


interface DTOCompare{

  ProductName: Product[] | undefined
  BrandName: string | undefined
}

export default function Concat({ProductName, BrandName}: DTOCompare){

          if(ProductName == undefined){

              return 'Error'

          }

          
          if(BrandName == undefined){

            return 'Error'

        }

          // const ValorUnico = ProductName.concat(BrandName)

     
          return ''
} 