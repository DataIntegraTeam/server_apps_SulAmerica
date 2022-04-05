import { v4 as uuidV4 } from 'uuid';

class Slot {
  id: string;
  slotId: string;
  professionalId: string;
  unitId: string;
  productId?: string;
  healthPlan: string;
  date: string;
  requirement?: {
    gender?: 'ALL' | 'MALE' | 'FEMALE';
    minAge: 18;
    maxAge: 50;
  };

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Slot };
