import { v4 as uuidV4 } from 'uuid';

class Professional {
  id?: string;
  unitId: string;
  name: string;
  gender: 'MALE' | 'FEMALE';
  document: {
    type: string;
    state: string;
    number: string;
  };
  photo: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Professional };
