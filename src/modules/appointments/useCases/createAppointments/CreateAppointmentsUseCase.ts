import { Appointment } from '../../model/Appointment';
import { IAppointmentsRepository } from '../../repositories/IAppointmentsRepository';

class CreateAppointmentsUseCase {
  constructor(private appointmentsRepository: IAppointmentsRepository) { }

  async execute(data: Appointment): Promise<string> {

    //slotNotAvailable: Quando o slot não está mais disponível para ser agendado, pode ocorrer quando a
    // agenda disponível já estiver sido agendada por outro beneficiário.
    // message: "slotNotAvailable"

    //forbiddenAppointment: Quando existe alguma restrição para criação do agendamento, isso se aplica
    // ao caso do beneficiário já ter um agendamento aberto para o produto especificado.
    // message: "forbiddenAppointment"

    //preRequisiteAppointment: Quando não está de acordo com os pré requisitos para consulta ou exame.
    // message: "preRequisiteAppointment"

    data.appointmentId = data.slotId
    await this.appointmentsRepository.create(data);

    return data.appointmentId
  }
}

export { CreateAppointmentsUseCase };
