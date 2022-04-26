import { Request, Response } from 'express';

import { CreateRevenuesUseCase } from './CreateRevenuesUseCase';

class CreateRevenuesController {
  constructor(private createRevenuesUseCase: CreateRevenuesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.createRevenuesUseCase.execute(request.body);

      return response.status(201).json({ message: 'Successfully registered!' });
    } catch (error) {
      return response.status(500).json({
        message:
          error.message ||
          'Mensagem descrevendo o erro que ocorreu em Revenues!',
      });
    }
  }
}

export { CreateRevenuesController };
