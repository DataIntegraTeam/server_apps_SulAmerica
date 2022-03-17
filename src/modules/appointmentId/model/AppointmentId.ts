import { v4 as uuidV4 } from 'uuid';

class AppointmentId {
  reason?: 'SAME_DAY_APPOINTMENT' | 'RESCHEDULE_ANOTHER_DAY' | 'DONT_NEED' | 'DONT_WANT_TO_INFORM';
  patientBenefitCode: string;

};

constructor() {
  if (!this.id) {
    this.id = uuidV4();
  }
}

export { AppointmentId };