import BrandRepository from '../repositories/BrandRepository'
import {hash} from 'bcryptjs'
import { getRepository } from 'typeorm'
import Transaction from '../models/Transaction'


interface DTOTransaction{

  product_Id: string
  change: number


}


export default class CreateTransationService{

     async Execute({product_Id,change} : DTOTransaction ) {

    const Instancia = getRepository(Transaction)

    const GetTransactions = await Instancia.find({where: {Product_id: product_Id}})
    
    console.log(GetTransactions)
    // const NewTransactions = GetTransactions.map((transactionProduct) => {

    //    transactionProduct.situation_stock 

    // })
    let valores

    for(let i = 0; i < GetTransactions.length; i++){
          
        valores =+ GetTransactions[i].situation_stock
        

    }
    
    if(valores) {

      const MaxValue = valores + change

      const newTransaction = Instancia.create({Product_id: product_Id, change, situation_stock: MaxValue})
      
      await Instancia.save(newTransaction)

      return newTransaction
    
    }

    const situation = 0

    const newStock = situation + change



    const newTransaction = Instancia.create({Product_id: product_Id, change, situation_stock: newStock})

    await Instancia.save(newTransaction)

    
    return newTransaction
    

      
        
 

 }
}