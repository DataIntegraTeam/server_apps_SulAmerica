import { SpecialtiesRepository } from '../../repositories/implementations/SpecialtiesRepository';
import { ListSpecialtiesController } from './ListSpecialtiesController';
import { ListSpecialtiesUseCase } from './ListSpecialtiesUseCase';

const specialtiesRepository = SpecialtiesRepository.getInstance();

const listSpecialtiesUseCase = new ListSpecialtiesUseCase(
  specialtiesRepository,
);

const listSpecialtiesController = new ListSpecialtiesController(
  listSpecialtiesUseCase,
);

export { listSpecialtiesController };
