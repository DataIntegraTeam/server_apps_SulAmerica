import { Appointment } from '../../model/Appointment';
import { IAppointmentsRepository } from '../IAppointmentsRepository';
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

  async list(): Promise<Appointment[]> {

    const allAppointmentS: any[] = await knex.raw(`
      SELECT it_agenda_central.cd_it_agenda_central,
        agenda_central.cd_prestador,
        agenda_central.cd_unidade_atendimento,
        it_agenda_central.hr_agenda,
        'ALL' Genero 
      FROM agenda_central    
      LEFT JOIN dbamv.it_agenda_central ON it_agenda_central.cd_agenda_central= agenda_central.cd_agenda_central
      WHERE sn_ativo = 'S'
    `)

    const appointments: Appointment[] = allAppointmentS.map(appointment => ({
      id: appointment.CD_IT_AGENDA_CENTRAL,
      professionalId: appointment.CD_PRESTADOR,
      unitId: appointment.CD_UNIDADE_ATENDIMENTO,
      productId: 'Identificador do produto, esse padrão SulAmérica.',
      healthPlan: 'DiretoSP - Plano de saúde. Definido pela SulAmérica',
      date: appointment.HR_AGENDA,
      requirement: {
        gender: appointment.TIPO,
        minAge: 18,
        maxAge: 50
      }
    }))

    return appointments
  }
}