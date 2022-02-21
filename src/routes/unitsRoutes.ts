import { Router } from 'express';
import { listUnitsController } from '../modules/units/useCases/listUnits';

const unitsRoutes = Router();

unitsRoutes.get('/units', (request, response) => {

  return listUnitsController.handle(request, response);
})

export { unitsRoutes };

// import { Router } from "express";
// import knex from "knex";
// import { unitsRoutes } from "./index"
// import { listUnitsController } from "../modules/units/useCases/listUnits";
// import db from "../database/db.js";

// // const unitsRoutes = Router();

// const unitsRoutes = async () => {
//   const pega_units = await knex.raw(`select * from atendime where cd_paciente = ${cdPaciente}`);

//   if (!pega_units || pega_units.length === 0) {
//     console.log("Não encontrou nenhum registro no banco");
//     return { status: 400, message: "Não encontrou nenhum registro no banco" };
//   }

// };
// export { unitsRoutes };