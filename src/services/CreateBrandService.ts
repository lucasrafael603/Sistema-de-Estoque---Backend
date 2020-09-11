import BrandRepository from '../repositories/BrandRepository'
import {hash} from 'bcryptjs'
import { getRepository } from 'typeorm'
import Brand from '../models/Brand'


interface DTOBrand{

  name: string
 


}


export default class CreateBrandService{

     async Execute({name} : DTOBrand ) {

      // const Instancia = new BrandRepository()

      //  const Find = Instancia.findOne({where: {name}})

      const Instancia = getRepository(Brand)

       const checkBrandExists = await Instancia.findOne({
        where: { name },
      })

      
        if (checkBrandExists){

        throw new Error('Brand Already Exists')

        }

          

      const newBrand = Instancia.create({name})

      await Instancia.save(newBrand)

      return newBrand || null

 }

}