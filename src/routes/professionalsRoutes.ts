import { Router } from 'express';
import { listProfessionalsController } from '../modules/professionals/useCases/listProfessionals';

const professionalsRoutes = Router();

professionalsRoutes.get('/professionals', (request, response) => {
  return listProfessionalsController.handle(request, response);
});

export { professionalsRoutes };
