import { CancelingRepository } from '../../repositories/implementations/CancelingRepository';
import { CancelingController } from './CancelingController';
import { CancelingUseCase } from './CancelingUseCase';

const cancelingRepository = CancelingRepository.getInstance();

const cancelingUseCase = new CancelingUseCase(cancelingRepository);

const cancelingController = new CancelingController(cancelingUseCase);

export { cancelingController };
