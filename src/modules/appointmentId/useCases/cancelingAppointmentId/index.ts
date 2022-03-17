import { AppointmentIdRepository } from "../../repositories/implementations/AppointmentIdRepository";
import { CancelingAppointmentIdController } from "./CancelingAppointmentIdController";
import { CancelingAppointmentIdUseCase } from "./CancelingAppointmentIdUseCase";


const appointmentIdRepository = AppointmentIdRepository.getInstance();

const cancelingAppointmentIdUseCase = new CancelingAppointmentIdUseCase(appointmentIdRepository);

const cancelingAppointmentIdController = new CancelingAppointmentIdController(cancelingAppointmentIdUseCase);

export { cancelingAppointmentIdController };