import { Slot } from '../../model/Slot';
import { ISlotsRepository } from '../../repositories/ISlotsRepository';

type TListSlotsUseCase = { data: Slot[] };

class ListSlotsUseCase {
  constructor(private slotsRoutes: ISlotsRepository) {}

  async execute(date?: string): Promise<TListSlotsUseCase> {
    const slots = await this.slotsRoutes.list(date);

    const data: TListSlotsUseCase = { data: slots };
    return data;
  }
}

export { ListSlotsUseCase };
