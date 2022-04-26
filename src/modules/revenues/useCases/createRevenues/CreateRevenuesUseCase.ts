import { Revenue } from '../../model/Revenue';
import { IRevenuesRepository } from '../../repositories/IRevenuesRepository';
// import crypto from 'crypto';

class CreateRevenuesUseCase {
  constructor(private revenuesRepository: IRevenuesRepository) {}

  async execute(data: Revenue): Promise<void> {
    await this.revenuesRepository.create(data);
  }
}

export { CreateRevenuesUseCase };
