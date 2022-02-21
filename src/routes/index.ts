import { Router } from "express";

import { unitsRoutes } from "./unitsRoutes";
import { professionalsRoutes } from "./professionalsRoutes";
import { appointmentsRoutes } from "./appointmentsRoutes";
import { authentication } from "../middleware/authentication";

const router = Router();

router.use(authentication)

router.use('/api/v1', unitsRoutes);
router.use('/api/v1', professionalsRoutes);
router.use('/api/v1', appointmentsRoutes);

export { router };