import { Router } from 'express';
import { listSpecialtiesController } from '../modules/specialties/useCases/listSpecialties';

const specialtiesRoutes = Router();

specialtiesRoutes.post('/specialties', (request, response) => {
  return listSpecialtiesController.handle(request, response);
});

export { specialtiesRoutes };
