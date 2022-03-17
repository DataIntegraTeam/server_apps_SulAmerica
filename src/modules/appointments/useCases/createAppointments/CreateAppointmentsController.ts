import { Request, Response } from 'express';

import { CreateAppointmentsUseCase } from './CreateAppointmentsUseCase';

class CreateAppointmentsController {
  constructor(private createAppointmentsUseCase: CreateAppointmentsUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const cd_dti_agendamento = await this.createAppointmentsUseCase.execute(request.body);
      // data.slotId
      return response.status(201).json({ appointmentId: cd_dti_agendamento });
    } catch (error) {
      return response.status(500).json({
        message:
          error.message ||
          'Mensagem descrevendo o erro que ocorreu em Appointment!',
      });
    }
  }
}

export { CreateAppointmentsController };
