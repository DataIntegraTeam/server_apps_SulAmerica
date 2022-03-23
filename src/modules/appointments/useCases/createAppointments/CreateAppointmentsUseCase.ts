import { Appointment } from '../../model/Appointment';
import { IAppointmentsRepository } from '../../repositories/IAppointmentsRepository';

class CreateAppointmentsUseCase {
  constructor(private appointmentsRepository: IAppointmentsRepository) { }

  async execute(data: Appointment): Promise<string> {

    data.appointmentId = data.slotId
    await this.appointmentsRepository.create(data);

    return data.appointmentId
  }
}

export { CreateAppointmentsUseCase };
