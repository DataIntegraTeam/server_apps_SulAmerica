import { AppointmentsRepository } from "../../repositories/implementations/AppointmentsRepository";
import { ListAppointmentsController } from "./ListAppointmentsController";
import { ListAppointmentsUseCase } from "./ListAppointmentsUseCase";

const appointmentsRepository = AppointmentsRepository.getInstance();

const listAppointmentsUseCase = new ListAppointmentsUseCase(appointmentsRepository);

const listAppointmentsController = new ListAppointmentsController(listAppointmentsUseCase);

export { listAppointmentsController };