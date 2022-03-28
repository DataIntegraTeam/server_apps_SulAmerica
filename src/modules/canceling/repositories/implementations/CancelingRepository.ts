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

  async create(data: TRequestData): Promise<void | Error> {
    console.log(data);
    try {
      await knex.raw(`UPDATE dataintegra.tbl_dti_agendamento 
      SET tp_status = 'false', reason = '${data.reason}' 
      WHERE appointment_id = '${data.appointmentId}' 
      AND nr_carteira = '${data.patientBenefitCode}';`)

    } catch (error) {
      console.error(error)
      throw new Error('');
    }
  }
}