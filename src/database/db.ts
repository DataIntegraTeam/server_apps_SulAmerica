import knex from 'knex';
import Oracle, { connectionClass, getConnection } from 'oracledb';

try {
  Oracle.initOracleClient({
    libDir: 'C:\\oracle\\instantclient_21_3',
  });
  console.log('ok');
} catch (e) {
  console.error('Opssss carai deu erro');
  console.error(e);
  process.exit(1);
}

const db = knex({
  client: 'oracledb',

  connection: {
    // host: 'C:\\Users\\integ\\Documents\\Wallet\\Wallet_DBDATAINTEGRA',
    user: 'admin',
    password: 'Dataintegra@2022',
    // database: 'dbdataintegra_high',
    database: 'DBDATAINTEGRA',
    connectString: 'dbdataintegra_high',
  },
  pool: {
    min: 1,
    max: 10,
  },
});

export default db;
