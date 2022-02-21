import { ProfessionalsRepository } from '../../repositories/implementations/ProfessionalsRepository';
import { ListProfessionalsController } from './ListProfessionalsController';
import { ListProfessionalsUseCase } from './ListProfessionalsUseCase';

const professionalsRepository = ProfessionalsRepository.getInstance();

const listProfessionalsUseCase = new ListProfessionalsUseCase(
  professionalsRepository,
);

const listProfessionalsController = new ListProfessionalsController(
  listProfessionalsUseCase,
);

export { listProfessionalsController };
