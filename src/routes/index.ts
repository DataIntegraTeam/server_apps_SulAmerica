import { Router } from 'express';

import { unitsRoutes } from './unitsRoutes';
import { professionalsRoutes } from './professionalsRoutes';
import { slotsRoutes } from './slotsRoutes';
import { authentication } from '../middleware/authentication';

const router = Router();

router.use(authentication);

router.use('/api/v1', unitsRoutes);
router.use('/api/v1', professionalsRoutes);
router.use('/api/v1', slotsRoutes);

export { router };
