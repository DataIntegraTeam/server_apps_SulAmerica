import { Appointment } from '../../model/Appointment';
import { IAppointmentsRepository } from '../IAppointmentsRepository';
import knex from '../../../../database/db';


export class AppointmentsRepository implements IAppointmentsRepository {
  private static INSTANCE: AppointmentsRepository;

  private constructor() {
  }
  public static getInstance(): AppointmentsRepository {
    if (!AppointmentsRepository.INSTANCE) {
      AppointmentsRepository.INSTANCE = new AppointmentsRepository();
    }
    return AppointmentsRepository.INSTANCE;
  }
  // async AppointmentsRepository.INSTANCE;

  async create(data: Appointment): Promise<void | Error> {
    try {

      // const appointment: any[] = await knex.raw()

      // const appointments: Appointment[] = Appointments.map(appointment)

      console.log(data)
    } catch (error) {
      throw new Error("");
    }
  }
}