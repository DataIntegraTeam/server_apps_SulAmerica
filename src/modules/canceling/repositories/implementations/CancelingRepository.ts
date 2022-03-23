import { ICancelingRepository } from '../ICancelingRepository';
import knex from '../../../../database/db';
import { TRequestData } from '../../useCases/canceling/CancelingUseCase';


export class CancelingRepository implements ICancelingRepository {
  private static INSTANCE: CancelingRepository;
  private constructor() { }
  public static getInstance(): CancelingRepository {
    if (!CancelingRepository.INSTANCE) {
      CancelingRepository.INSTANCE = new CancelingRepository();
    }
    return CancelingRepository.INSTANCE;
  }

  async update(data: TRequestData): Promise<void | Error> {
    console.log(data);
    try {
      const appointment = await knex.raw(`SELECT cd_dti_agendamento FROM dataintegra.tbl_dti_agendamento WHERE appointment_id = ${data.appointmentId}`)
      if (!appointment[0]) return new Error('appointmentNotFound')

      const sql = `UPDATE dataintegra.tbl_dti_agendamento SET  tp_status = 'false', reason = ${data.reason} WHERE appointment_id = ${data.appointmentId} AND nr_carteira = ${data.patientBenefitCode}`


      await knex.raw(sql)
    } catch (error) {
      console.error(error)
      throw new Error('');

    }
  }
}