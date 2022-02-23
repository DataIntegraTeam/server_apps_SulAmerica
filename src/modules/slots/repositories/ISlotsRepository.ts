import { Slot } from '../model/Slot';

interface ISlotsRepository {
  list(date?: string): Promise<Slot[]>;
}

export { ISlotsRepository };
