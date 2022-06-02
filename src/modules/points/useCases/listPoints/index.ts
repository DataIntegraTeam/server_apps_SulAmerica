import { PointsRepository } from '../../repositories/implementations/PointsRepository';
import { ListPointsController } from './ListPointsController';
import { ListPointsUseCase } from './ListPointsUseCase';

const unitsRepository = PointsRepository.getInstance();

const listUnitsUseCase = new ListPointsUseCase(unitsRepository);

const listUnitsController = new ListPointsController(listUnitsUseCase);

export { listUnitsController };
