import { AppointmentId } from '../../model/AppointmentId';
import { IAppointmentIdRepository } from '../../repositories/IAppointmentIdRepository';

class CancelingAppointmentIdUseCase {
  constructor(private appointmentIdRepository: IAppointmentIdRepository) { }

  async execute(data: AppointmentId): Promise<number> {
    date.cd_it_agenda_central = date.get()

    await this.appointmentIdRepository.create(data);

    return data.cd_it_agenda_central
  }
}

export { CancelingAppointmentIdUseCase };