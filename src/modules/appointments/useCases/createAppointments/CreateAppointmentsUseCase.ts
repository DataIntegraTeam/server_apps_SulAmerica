import { Appointment } from '../../model/Appointment';
import { IAppointmentsRepository } from '../../repositories/IAppointmentsRepository';

class CreateAppointmentsUseCase {
  constructor(private appointmentsRepository: IAppointmentsRepository) { }

  async execute(data: Appointment): Promise<number> {
    data.cd_dti_agendamento = Math.floor(100000 + Math.random() * 900000);

    await this.appointmentsRepository.create(data);

    return data.cd_dti_agendamento
  }
}

export { CreateAppointmentsUseCase };
