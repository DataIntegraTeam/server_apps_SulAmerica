import { v4 as uuidV4 } from 'uuid';

class Appointment {
  slotId: string;
  professionalId: string;
  unitId: string;
  productId: string;
  telemedicine: string;
  patient: {
    benefitCode: string,
    phone: string,
    email: string,
    name: string,
    birthDate: Date,
    document: {
      type: string,
      number: string
    }
  }
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Appointment }
