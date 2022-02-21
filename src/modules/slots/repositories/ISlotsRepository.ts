import { Slot } from '../model/Slot';

interface ISlotsRepository {
  list(): Promise<Slot[]>;
}

export { ISlotsRepository };
