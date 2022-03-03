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
    try {
      const sql = `INSERT INTO dataintegra.tbl_dti_agendamento (CD_AGENDAMENTO_INTEGRA, CD_PRESTADOR, CD_UNID_INT, CD_PRODUTO, NR_CARTEIRA, NR_FONE, EMAIL, NM_PACIENTE, DT_NASCIMENTO, NR_CPF) VALUES ('${data.slotId}', ${data.professionalId}, ${data.unitId}, ${data.productId}, '${data.patient.benefitCode}', ${data.patient.phone}, '${data.patient.email}', '${data.patient.name}', '${data.patient.birthDate}', ${data.patient.document.number});`

      console.log(sql);
      const created: any = await knex.raw(sql)
      console.log(created);
      new Date().toISOString();

      // console.log(data, new Date().toISOString());
    } catch (error) {
      console.log(error);
      throw new Error('');
    }
  }
}