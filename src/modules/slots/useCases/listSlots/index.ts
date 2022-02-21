import { SlotsRepository } from '../../repositories/implementations/SlotsRepository';
import { ListSlotsController } from './ListSlotsController';
import { ListSlotsUseCase } from './ListSlotsUseCase';

const slotsRepository = SlotsRepository.getInstance();

const listSlotsUseCase = new ListSlotsUseCase(slotsRepository);

const listSlotsController = new ListSlotsController(listSlotsUseCase);

export { listSlotsController };
