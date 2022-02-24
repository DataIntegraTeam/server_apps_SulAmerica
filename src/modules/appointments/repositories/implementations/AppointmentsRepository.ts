import { Appointment } from '../../model/Appointment';
import { IAppointmentsRepository } from '../IAppointmentsRepository';
import moment from 'moment'
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

  async create(data: Appointment): Promise<void | Error> {
    try {

      // const appointment: any[] = await knex.raw()

      // const appointments: Appointment[] = Appointment.map(appointment => {
      //   id: ""
      //   slotId: appointment.CD_AGENDAMENTO_INTEGRA,
      //     professionalId: appointment.CD_PRESTADOR,
      //       unitId: appointment.CD_UNID_INT,
      //         productId: appointment.CD_PRODUTO,
      //           telemedicine: true,
      //             patient: {
      //     benefitCode: appointment.NR_CARTEIRA,
      //       phone: appointment.NR_FONE,
      //         email: appointment.EMAIL,
      //           name: appointment.NM_PACIENTE,
      //             birthDate: appointment.DT_NASCIMENTO,
      //               document: {
      //       type: "CPF"
      //       number: appointment.NR_CPF,
      //     }
      //   }
      // })
      const currentData = moment
        .utc(moment.utc())
        .local()
        .format('DD-MM-YYYY HH:mm:ss')

      console.log(data, currentData)
    } catch (error) {
      throw new Error("");
    }
  }
}