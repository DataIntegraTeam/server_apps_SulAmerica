import { v4 as uuidV4 } from 'uuid';

class Specialtie {
  id: string;
  name: string;
  preparation: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Specialtie };
