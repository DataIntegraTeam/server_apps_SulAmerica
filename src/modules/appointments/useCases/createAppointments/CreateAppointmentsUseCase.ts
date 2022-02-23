import { Appointment } from '../../model/Appointment';
import { IAppointmentsRepository } from '../../repositories/IAppointmentsRepository';

type TCreateAppointmentsUseCase = { data: Appointment[] }

class CreateAppointmentsUseCase {
  constructor(private appointmentsRepository: IAppointmentsRepository) { }

  async execute(data: Appointment): Promise<TCreateAppointmentsUseCase> {
    const appointments = await this.appointmentsRepository.create();

    const data: TCreateAppointmentsUseCase = { data: appointments }
    return data;
  }
}

export { CreateAppointmentsUseCase }