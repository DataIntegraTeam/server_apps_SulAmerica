import { Router } from 'express';

import { unitsRoutes } from './points.routes';

const router = Router();

router.use('/', unitsRoutes);

export { router };
