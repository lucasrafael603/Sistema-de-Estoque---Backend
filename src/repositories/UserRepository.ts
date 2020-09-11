// import {isEqual} from 'date-fns'
import User from '../models/User'
import { EntityRepository, Repository} from 'typeorm'


/*interface CreateAppointment{

  name: string,
  age: number,
  date: Date

}*/


@EntityRepository(User)
class UserRepository extends Repository<User> {

//   public async findByDate(date: Date): Promise< Appointment | null>{
//     //const findAppoint = this.appointments.find(appointment =>
//       //  isEqual(date, appointment.date)

//       const findAppointment = await this.findOne( {where: {date}} )


//       return findAppointment|| null
// }

}

export default UserRepository
