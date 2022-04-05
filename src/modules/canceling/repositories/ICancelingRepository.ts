import { TRequestData } from '../useCases/canceling/CancelingUseCase';

interface ICancelingRepository {
  create(data: TRequestData): Promise<void | Error>;
}

export { ICancelingRepository };
