import { Revenue } from '../model/Revenue';

interface IRevenuesRepository {
  create(data: Revenue): Promise<void | Error>;
}

export { IRevenuesRepository };
