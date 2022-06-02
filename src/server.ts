import 'dotenv/config';
import express, { RequestHandler } from 'express';
import cors from 'cors';

import { router } from './routes';

const app = express();
app.use(cors());

app.use(express.json() as RequestHandler);

app.use(router);

app.listen(8080, () => console.log('Server is running on port 8080'));
