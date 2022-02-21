import knex from "knex";
import Oracle from "oracledb";

Oracle.initOracleClient({ libDir: "C:\\Node\\instantclient_19_6_win64" });
//Oracle.initOracleClient({ libDir: "/home/marcelo/Documentos/DataIntegra/DB/instantclient_19_6_win64" });

const db = knex({

  client: "oracledb",

  connection: {
    host: "10.16.70.3",
    user: "dbamv",
    password: "inovar2013",
    database: "MVTESTE2",
  },
  pool: {
    min: 1,
    max: 5,
  },
});

export default db;
