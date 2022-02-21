import { Appointment } from '../../model/Appointment';
import { IAppointmentsRepository } from '../../repositories/IAppointmentsRepository';

type TListAppointmentsUseCase = { data: Appointment[] }

class ListAppointmentsUseCase {

  constructor(private appointmentsRoutes: IAppointmentsRepository) { }

  async execute(): Promise<TListAppointmentsUseCase> {
    const appointments = await this.appointmentsRoutes.list();

    const data: TListAppointmentsUseCase = { data: appointments }
    return data;
  }
}

export { ListAppointmentsUseCase }