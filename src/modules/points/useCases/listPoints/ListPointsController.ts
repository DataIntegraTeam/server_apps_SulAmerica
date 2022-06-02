import { Request, Response } from 'express';

import { ListPointsUseCase } from './ListPointsUseCase';

class ListPointsController {
  constructor(private listUnitsUseCase: ListPointsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const date = request.query.date;
    try {
      const all = await this.listUnitsUseCase.execute();

      return response.status(200).json(all);
    } catch (error) {
      return response.status(500).json({
        error,
      });
    }
  }
}

export { ListPointsController };
