import { Request, Response } from 'express';

import { CancelingAppointmentIdUseCase } from './CancelingAppointmentIdUseCase'

class CancelingAppointmentIdController {
  constructor(private cancelingAppointmentIdUseCase: CancelingAppointmentIdUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const cd_it_agenda_central = await this.cancelingAppointmentIdUseCase.execute(request.body);

      return response.status(201).json({ appointmentId: cd_it_agenda_central });
    } catch (error) {
      return response.status(500).json({
        message:
          error.message || 'Mensagem descrevendo o erro que ocorreu em canceling AppointmentId!',
      })
    }
  }
}

export { CancelingAppointmentIdController };