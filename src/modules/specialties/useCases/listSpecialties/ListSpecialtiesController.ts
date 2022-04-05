import { Request, Response } from 'express';

import { ListSpecialtiesUseCase } from './ListSpecialtiesUseCase';

class ListSpecialtiesController {
  constructor(private listSpecialtiesUseCase: ListSpecialtiesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const all = await this.listSpecialtiesUseCase.execute();

      return response.status(200).json(all);
    } catch (error) {
      return response.status(500).json({
        massage:
          error.message ||
          'Mensagem descrevendo o erro que ocorreu Professionals!',
      });
    }
  }
}

export { ListSpecialtiesController };
