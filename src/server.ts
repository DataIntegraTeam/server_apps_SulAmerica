import express from 'express'
// import swaggerUi  from 'swagger-ui-express'
// import swaggerFile  from '../swagger_output.json'
import { router } from './routes';

const app = express();

app.use(router);
// app.use(cors());


// app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3000, () => console.log('Server is running!'));

