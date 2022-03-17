import { Router } from 'express';
import { cancelingAppointmentIdController } from '../modules/appointmentId/useCases/cancelingAppointmentId';

const appointmentIdRoutes = Router();

appointmentIdRoutes.post('/appointments/appointmentId', (request, response) => {
  return cancelingAppointmentIdController.handle(request, response);
});

export { appointmentIdRoutes };
