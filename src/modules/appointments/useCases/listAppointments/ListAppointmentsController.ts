import { Request, Response } from "express";

import { ListAppointmentsUseCase } from "./ListAppointmentsUseCase";


class ListAppointmentsController {
  constructor(private listAppointmentsUseCase: ListAppointmentsUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const all = await this.listAppointmentsUseCase.execute();

      return response.status(200).json(all);
    } catch (error) {
      return response.status(500).json({
        message: error.message || "Mensagem descrevendo o erro que ocorreu!"
      })
    }
  }
}

export { ListAppointmentsController }