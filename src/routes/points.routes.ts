import { Router } from 'express';
import { listUnitsController } from '../modules/points/useCases/listPoints';

const unitsRoutes = Router();

unitsRoutes.get('/points', (request, response, next) => {
  return listUnitsController.handle(request, response);
});

export { unitsRoutes };
