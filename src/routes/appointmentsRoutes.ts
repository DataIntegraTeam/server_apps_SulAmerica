import { Router } from 'express';
import { listAppointmentsController } from "../modules/appointments/useCases/listAppointments";

const appointmentsRoutes = Router();

appointmentsRoutes.get('/appointments', async (request, response) => {
  return listAppointmentsController.handle(request, response);

})

export { appointmentsRoutes };
