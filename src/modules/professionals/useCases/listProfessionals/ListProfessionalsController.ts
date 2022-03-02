import { Request, Response } from 'express';

import { ListProfessionalsUseCase } from './ListProfessionalsUseCase';

class ListProfessionalsController {
  constructor(private listProfessionalsUseCase: ListProfessionalsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const all = await this.listProfessionalsUseCase.execute();

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

export { ListProfessionalsController };
