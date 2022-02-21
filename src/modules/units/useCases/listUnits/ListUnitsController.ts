import { Request, Response } from "express";

import { ListUnitsUseCase } from './ListUnitsUseCase';

class ListUnitsController {
  constructor(private listUnitsUseCase: ListUnitsUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const all = await this.listUnitsUseCase.execute();

      return response.status(200).json(all);
    } catch (error) {
      return response.status(500).json({
        message: error.message || "Mensagem descrevendo o erro que ocorreu!"
      })
    }
  }
}

export { ListUnitsController }