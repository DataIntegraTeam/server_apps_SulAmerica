import { ICancelingRepository } from '../ICancelingRepository';
import knex from '../../../../database/db';
import { TRequestData } from '../../useCases/canceling/CancelingUseCase';

export class CancelingRepository implements ICancelingRepository {
  private static INSTANCE: CancelingRepository;
  private constructor() {}
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
      SET tp_status = 'A', 
      tp_movimento = 'E', 
      ds_cancelamento = '${data.reason}' 
      WHERE cd_it_agenda_central = '${data.appointmentId}' 
      AND nr_carteira = '${data.patientBenefitCode}'`);
    } catch (error) {
      console.error(error);
      throw new Error('');
    }
  }
}
