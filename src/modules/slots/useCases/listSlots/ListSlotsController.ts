import { Request, Response } from 'express';

import { ListSlotsUseCase } from './ListSlotsUseCase';

class ListSlotsController {
  constructor(private listSlotsUseCase: ListSlotsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const date = request.query.date as string;
    try {
      const all = await this.listSlotsUseCase.execute(date);

      return response.status(200).json(all);
    } catch (error) {
      return response.status(500).json({
        message:
          error.message || 'Mensagem descrevendo o erro que ocorreu Slots!',
      });
    }
  }
}

export { ListSlotsController };
