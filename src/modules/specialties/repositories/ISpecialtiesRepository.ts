import { Specialtie } from '../model/Specialtie';

interface ISpecialtiesRepository {
  list(): Promise<Specialtie[]>;
}

export { ISpecialtiesRepository };
