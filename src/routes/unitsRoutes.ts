import { Router } from 'express';
import { listUnitsController } from '../modules/units/useCases/listUnits';

const unitsRoutes = Router();

unitsRoutes.get('/units', (request, response, next) => {
  // response.header("Access-Control-Allow-Origin", "http://localhost:8282");
  // response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  // next();
  return listUnitsController.handle(request, response);
});

export { unitsRoutes };
