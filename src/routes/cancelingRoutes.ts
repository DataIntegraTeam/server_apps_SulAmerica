import { Router } from 'express';
import { cancelingController } from '../modules/canceling/useCases/canceling';

const cancelingRoutes = Router();

cancelingRoutes.post(
  '/appointments/:appointmentId/canceling',
  (request, response) => {
    // const { appointmentId } = request.params
    // const appointment = data.find(p => p.appointmentId == appointmentId)
    // response.json(appointment)

    return cancelingController.handle(request, response);
  },
);

export { cancelingRoutes };
