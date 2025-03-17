import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import * as routes from '../dist/routes/routes';
import fs from 'fs';
import path from 'path';

const app = express();

app.use(bodyParser.json());

const swaggerFile = path.join(__dirname, '../dist/swagger.json');
if (fs.existsSync(swaggerFile)) {
  const swaggerDocument = JSON.parse(fs.readFileSync(swaggerFile, 'utf8'));
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

routes.RegisterRoutes(app);

export default app;
