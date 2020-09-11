// import {isEqual} from 'date-fns'
import Product from '../models/Product'
import { EntityRepository, Repository} from 'typeorm'


/*interface CreateAppointment{

  name: string,
  age: number,
  date: Date

}*/


@EntityRepository(Product)
class ProductRepository extends Repository<Product> {

//   public async findByDate(date: Date): Promise< Appointment | null>{
//     //const findAppoint = this.appointments.find(appointment =>
//       //  isEqual(date, appointment.date)

//       const findAppointment = await this.findOne( {where: {date}} )


//       return findAppointment|| null
// }

}

export default ProductRepository
