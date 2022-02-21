import { Router } from 'express';
import { listSlotsController } from '../modules/slots/useCases/listSlots';

const slotsRoutes = Router();

slotsRoutes.get('/slots', async (request, response) => {
  return listSlotsController.handle(request, response);
});

export { slotsRoutes };
