import { Unit } from '../model/Unit';

interface IUnitsRepository {
  list(): Promise<Unit[]>;
}

export { IUnitsRepository };
