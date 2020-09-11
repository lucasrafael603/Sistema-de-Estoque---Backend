// import {isEqual} from 'date-fns'
import Brand from '../models/Brand'
import { EntityRepository, Repository} from 'typeorm'


/*interface CreateAppointment{

  name: string,
  age: number,
  date: Date

}*/


@EntityRepository(Brand)
class BrandRepository extends Repository<Brand> {

//   public async findByDate(date: Date): Promise< Appointment | null>{
//     //const findAppoint = this.appointments.find(appointment =>
//       //  isEqual(date, appointment.date)

//       const findAppointment = await this.findOne( {where: {date}} )


//       return findAppointment|| null
// }

}

export default BrandRepository
