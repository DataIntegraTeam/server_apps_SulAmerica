import { Router } from 'express';
import { createRevenuesController } from '../modules/revenues/useCases/createRevenues';

const revenuesRoutes = Router();

revenuesRoutes.post('/revenues', (request, response) => {
  return createRevenuesController.handle(request, response);
});

export { revenuesRoutes };
