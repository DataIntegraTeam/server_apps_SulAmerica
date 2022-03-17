import { AppointmentId } from '../../model/AppointmentId';
import { IAppointmentIdRepository } from '../IAppointmentIdRepository';
import knex from '../../../../database/db';


export class AppointmentIdRepository implements IAppointmentIdRepository {
  private constructor() { }
  public static getInstance(): AppointmentIdRepository {
    if (!AppointmentIdRepository.INSTANCE) {
      AppointmentIdRepository.INSTANCE = new AppointmentIdRepository();
    }
    return AppointmentIdRepository.INSTANCE;
  }

  async create(data: AppointmentId): Promise<void | Error> {
    console.log(data);
    try {
      const sql = ``


      await knex.raw(sql)
    } catch (error) {
      console.error(error)
      throw new Error('');

    }
  }
}