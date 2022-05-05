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
      const seq_agenda = await knex.raw(
        `SELECT dataintegra.seq_dti_agendamento.nextval seq_dti from dual`,
      );

      console.log(seq_agenda[0].SEQ_DTI);
      const sql = `INSERT INTO dataintegra.tbl_dti_agendamento(
        cd_dti_agenda, 
        tp_status,
        dt_gerado, 
        tp_movimento, 
        ds_cancelamento, 
        cd_it_agenda_central, 
        nr_carteira)
        VALUES
        ('${seq_agenda[0].SEQ_DTI}',
        '${(data.tp_status = 'A')}',
        to_Date('${new Date().toISOString().split('T')[0]}','YYYY-MM-DD'),
        '${(data.tp_movimento = 'E')}',
        '${data.reason}',
        '${data.appointmentId}',
        '${data.patientBenefitCode}')
      `;

      await knex.raw(sql);

      const result_func_canceling = await knex.raw(
        `
        DECLARE
        P_RESULT NUMBER;
        BEGIN DATAINTEGRA.PRC_DTI_AGENDAMENTO(P_RESULT);
        DBMS_OUTPUT.put_line(P_RESULT);
          END;
        `,
      );

      console.log(result_func_canceling);
      console.log(seq_agenda);
      if (result_func_canceling == '0') {
        throw new Error('Não foi possivel cancela o horario!');
      }
    } catch (error) {
      console.error(error);
      throw new Error('');
    }
  }
}
