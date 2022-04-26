import { RevenuesRepository } from '../../repositories/implementations/RevenuesRepository';
import { CreateRevenuesController } from './CreateRevenuesController';
import { CreateRevenuesUseCase } from './CreateRevenuesUseCase';

const revenuesRepository = RevenuesRepository.getInstance();

const createRevenuesUseCase = new CreateRevenuesUseCase(revenuesRepository);

const createRevenuesController = new CreateRevenuesController(
  createRevenuesUseCase,
);

export { createRevenuesController };
