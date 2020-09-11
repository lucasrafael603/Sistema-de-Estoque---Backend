

// import {isEqual} from 'date-fns'
import Transaction from '../models/Transaction'
import { EntityRepository, Repository} from 'typeorm'


/*interface CreateAppointment{

  name: string,
  age: number,
  date: Date

}*/


@EntityRepository(Transaction)
class TransactionRepository extends Repository<Transaction> {

//   public async findByDate(date: Date): Promise< Appointment | null>{
//     //const findAppoint = this.appointments.find(appointment =>
//       //  isEqual(date, appointment.date)

//       const findAppointment = await this.findOne( {where: {date}} )


//       return findAppointment|| null
// }

}

export default TransactionRepository

