import { Professional } from '../model/Professional';

interface IProfessionalsRepository {
  list(): Promise<Professional[]>;
}

export { IProfessionalsRepository };
