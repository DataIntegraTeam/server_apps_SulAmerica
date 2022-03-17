import { Appointment } from '../../model/Appointment';
import { IAppointmentsRepository } from '../../repositories/IAppointmentsRepository';

class CreateAppointmentsUseCase {
  constructor(private appointmentsRepository: IAppointmentsRepository) { }

  async execute(data: Appointment): Promise<number> {
    // data.cd_dti_agendamento = Math.floor(1 + Math.random() + 1);
    data.cd_dti_agendamento = (data.cd_dti_agendamento = 0 + 1);
    // data.cd_dti_agendamento
    // data.cd_dti_agendamento
    // if (data.cd_dti_agendamento == 0)

    await this.appointmentsRepository.create(data);

    return data.cd_dti_agendamento
  }
}

export { CreateAppointmentsUseCase };
