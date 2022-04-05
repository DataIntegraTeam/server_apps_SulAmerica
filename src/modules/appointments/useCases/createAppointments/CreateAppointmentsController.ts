import { Request, Response } from 'express';

import { CreateAppointmentsUseCase } from './CreateAppointmentsUseCase';

class CreateAppointmentsController {
  constructor(private createAppointmentsUseCase: CreateAppointmentsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const appointmentId = await this.createAppointmentsUseCase.execute(
        request.body,
      );

      return response.status(201).json({ appointmentId });
    } catch (error) {
      return response.status(500).json({
        message:
          error.message ||
          'Mensagem descrevendo o erro que ocorreu em Appointment!',
        // 'forbiddenAppointment'
      });

      //slotNotAvailable: Quando o slot não está mais disponível para ser agendado, pode ocorrer quando a
      // agenda disponível já estiver sido agendada por outro beneficiário.
      // message: "slotNotAvailable"

      //forbiddenAppointment: Quando existe alguma restrição para criação do agendamento, isso se aplica
      // ao caso do beneficiário já ter um agendamento aberto para o produto especificado.
      // message: "forbiddenAppointment"

      //preRequisiteAppointment: Quando não está de acordo com os pré requisitos para consulta ou exame.
      // message: "preRequisiteAppointment"
    }
  }
}

export { CreateAppointmentsController };
