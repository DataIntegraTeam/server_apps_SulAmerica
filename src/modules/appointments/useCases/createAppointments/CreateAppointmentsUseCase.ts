import { Appointment } from '../../model/Appointment';
import { IAppointmentsRepository } from '../../repositories/IAppointmentsRepository';

class CreateAppointmentsUseCase {
  constructor(private appointmentsRepository: IAppointmentsRepository) {}

  async execute(data: Appointment): Promise<void> {
    await this.appointmentsRepository.create(data);
  }
}

export { CreateAppointmentsUseCase };
