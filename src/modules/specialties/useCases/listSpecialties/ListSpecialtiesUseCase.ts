import { Specialtie } from '../../model/Specialtie';
import { ISpecialtiesRepository } from '../../repositories/ISpecialtiesRepository';

type TListSpecialtiesUseCase = { data: Specialtie[] };

class ListSpecialtiesUseCase {
  constructor(private specialtiesRoutes: ISpecialtiesRepository) { }

  async execute(): Promise<TListSpecialtiesUseCase> {
    const specialties = await this.specialtiesRoutes.list();

    const data: TListSpecialtiesUseCase = { data: specialties };
    return data;
  }
}

export { ListSpecialtiesUseCase };
