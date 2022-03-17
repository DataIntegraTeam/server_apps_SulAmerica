import { Router } from 'express';
import { specialtiesController } from '../modules/appointmentId/useCases/specialties';

const specialtiesRoutes = Router();

specialtiesRoutes.post('/specialties', (request, response) => {
  return specialtiesController.handle(request, response);
});

export { specialtiesRoutes };
