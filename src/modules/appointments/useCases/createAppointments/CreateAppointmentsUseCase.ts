import { Appointment } from '../../model/Appointment';
import { IAppointmentsRepository } from '../../repositories/IAppointmentsRepository';
import crypto from 'crypto';

class CreateAppointmentsUseCase {
  constructor(private appointmentsRepository: IAppointmentsRepository) {}

  async execute(data: Appointment): Promise<string | Error> {
    const date = new Date(data.patient.birthDate);
    const result = new Date().getFullYear() - date.getFullYear();
    console.log(result);
    if (!(result >= 18 && result <= 50)) {
      throw new Error('preRequisiteAppointment');
    }
    data.appointmentId = String(crypto.randomInt(10000, 9000000));
    await this.appointmentsRepository.create(data);

    return data.appointmentId;
  }
}

export { CreateAppointmentsUseCase };
