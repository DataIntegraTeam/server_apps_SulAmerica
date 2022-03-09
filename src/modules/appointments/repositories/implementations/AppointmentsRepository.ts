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
      const sql = `INSERT INTO dataintegra.tbl_dti_agendamento (
        cd_dti_agendamento,
        tp_fluxo,
        tp_status,
        ds_erro,
        dt_gerado,
        tp_registro,
        dt_processado, 
        tp_movimento,
        cd_multi_empresa,
        CD_AGENDAMENTO_INTEGRA, 
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
        (${data.cd_dti_agendamento},
          '${data.tp_fluxo = 'S'}',
          '${data.tp_status = 'A'}',
          '${data.ds_erro = 'null'}',
          '${data.dt_gerado = ''}',
          '${data.tp_registro = '001'}',
          '${data.dt_processado = 'null'}',
          '${data.tp_movimento = 'null'}',
          '${data.cd_multi_empresa = 'null'}',
          '${data.slotId}', 
          '${data.professionalId}', 
          '${data.unitId}', 
          '${data.productId}', 
          '${data.patient.benefitCode}', 
          '${data.patient.phone}', 
          '${data.patient.email}', 
          '${data.patient.name}', 
          null, 
          '${data.patient.document.number}')
        `

      await knex.raw(sql)
    } catch (error) {
      console.error(error)
      throw new Error('');
    }
  }
}