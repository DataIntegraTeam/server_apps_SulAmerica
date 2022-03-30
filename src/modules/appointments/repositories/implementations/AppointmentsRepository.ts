import { Appointment } from '../../model/Appointment';
import { IAppointmentsRepository } from '../IAppointmentsRepository';
import knex from '../../../../database/db';

export class AppointmentsRepository implements IAppointmentsRepository {
  private static INSTANCE: AppointmentsRepository;

  private constructor() { }
  public static getInstance(): AppointmentsRepository {
    if (!AppointmentsRepository.INSTANCE) {
      AppointmentsRepository.INSTANCE = new AppointmentsRepository();
    }
    return AppointmentsRepository.INSTANCE;
  }

  async create(data: Appointment): Promise<void | Error> {
    console.log(data);
    try {
      const seq_agenda = await knex.raw(`SELECT dataintegra.seq_dti_agendamento.nextval seq_dti from dual`);
      // if (!cd_agendamento_integra || cd_agendamento_integra.length === 0) { 
      //   return {
      //     result: 'OK',
      //     debug_msg: 'slotNotAvailable',
      //   };
      // }
      console.log(seq_agenda[0].SEQ_DTI);
      const sql = `INSERT INTO dataintegra.tbl_dti_agendamento(
        cd_dti_agendamento,
        tp_fluxo,
        tp_status,
        ds_erro,
        dt_gerado,
        tp_registro,
        dt_processado, 
        tp_movimento,
        cd_multi_empresa,
        reason,
        CD_AGENDAMENTO_INTEGRA, 
        APPOINTMENT_ID,
        CD_PRESTADOR, 
        CD_UNID_INT, 
        CD_PRODUTO, 
        NR_CARTEIRA, 
        NR_FONE, 
        EMAIL, 
        NM_PACIENTE, 
        DT_NASCIMENTO, 
        NR_CPF)        
        VALUES 
        ('${seq_agenda[0].SEQ_DTI}',
        '${data.tp_fluxo = 'S'}',
        '${data.tp_status = 'A'}',
        '${data.ds_erro = 'null'}',
        '${data.dt_gerado = ''}',
        '${data.tp_registro = '001'}',
        '${data.dt_processado = 'null'}',
        '${data.tp_movimento = 'I'}',
        '${data.cd_multi_empresa = 'null'}',
        '${data.reason = 'null'}',
        '${data.appointmentId}',
        '${data.slotId}', 
        '${data.professionalId}', 
        '${data.unitId}', 
        '${data.productId}', 
        '${data.patient.benefitCode}', 
        '${data.patient.phone}', 
        '${data.patient.email}', 
        '${data.patient.name}', 
        To_Date('${data.patient.birthDate}','YYYY-MM-DD'), 
        '${data.patient.document.number}')
        `

      await knex.raw(sql)
    } catch (error) {
      console.error(error)
      throw new Error('');
    }
  }
}