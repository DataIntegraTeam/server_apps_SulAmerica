import { Appointment } from "../model/Appointment";

interface IAppointmentsRepository {
  list(): Promise<Appointment[]>;
}

export { IAppointmentsRepository }