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
      // const appointment = await knex.raw(`SELECT cd_dti_agendamento FROM dataintegra.tbl_dti_agendamento WHERE nr_carteira = ${data.patientBenefitCode}`)
      // if (!appointment[0]) return new Error('appointmentNotFound')
      const lastAppointment = await knex.raw('SELECT cd_dti_agendamento FROM dataintegra.tbl_dti_agendamento WHERE ROWNUM = 1 ORDER BY cd_dti_agendamento DESC')
      let cdDtiAgendamento: number = 1;
      if (lastAppointment[0]) {
        cdDtiAgendamento = lastAppointment[0].CD_DTI_AGENDAMENTO + 1;
      }
      console.log(lastAppointment);

      const sql = `INSERT INTO dataintegra.tbl_dti_agendamento(         
        cd_dti_agendamento,
        tp_status, 
        tp_movimento,
        reason,  
        appointment_id, 
        nr_carteira) 
        VALUES
        ('${cdDtiAgendamento}',
        '${data.tp_status = 'A'}',
        '${data.tp_movimento = 'E'}',
        '${data.reason}',
        '${data.appointmentId}',
        '${data.patientBenefitCode}')
        `

      await knex.raw(sql)
    } catch (error) {
      console.error(error)
      throw new Error('');
    }
  }
}