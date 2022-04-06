import { Router } from 'express';
import { cancelingController } from '../modules/canceling/useCases/canceling';

const cancelingRoutes = Router();

cancelingRoutes.post(
  '/appointments/:appointmentId/canceling',
  (request, response) => {
    return cancelingController.handle(request, response);
  },
);

export { cancelingRoutes };
