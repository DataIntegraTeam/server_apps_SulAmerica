import { AppointmentId } from '../model/AppointmentId';

interface IAppointmentIdRepository {
  create(data: AppointmentId): Promise<void | Error>;
}

export { IAppointmentIdRepository }