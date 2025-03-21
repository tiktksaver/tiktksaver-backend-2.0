/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Dependencies from '@/types/Dependencies';
import express, { Express } from 'express';
import container from '@/config/container/index';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import docs from './api/openapi.json';
import { IAllowedOrigins, IOptions } from '@/types/config/Aplication';

export class App {
    private app: Express;
    private enrivonment: Dependencies['environment'];
    private elasticSearchClient: Dependencies['elasticSearchClient'];
    private downloadRoutes: Dependencies['downloadRoutes'];
    private logRoutes: Dependencies['logRoutes'];
    private allowedOrigins: IAllowedOrigins;
    private options: IOptions;

    private logger: Dependencies['logger'];
    

    constructor({ environment, logger, elasticSearchClient, downloadRoutes, logRoutes }: Pick<Dependencies, 'environment' | 'logger' | 'elasticSearchClient' | 'downloadRoutes' | 'logRoutes'>) {
        this.enrivonment = environment;
        this.logger = logger;
        this.elasticSearchClient = elasticSearchClient;
        this.downloadRoutes = downloadRoutes;
        this.logRoutes = logRoutes;
        this.app = express();

        this.allowedOrigins = [environment.frontend_origin, environment.electron_origin];
        this.options = {
            origin: this.allowedOrigins,
            credentials: true
        };
    }

    async start() {
        await this.elasticSearchClient.testConnection();
        await this.intializeServer();
    }


    async intializeServer() {
        this.app.locals.container = container;
        this.app.use(bodyParser.json());
        this.app.use(cors(this.options));
        this.app.use('/api-docs', swaggerUi.serve);
        this.app.get('/api-docs', swaggerUi.setup(docs));
        this.app.use('/api', [this.downloadRoutes.init(), this.logRoutes.init()]);
        this.app.listen(this.enrivonment.port, () => console.log(`Server running on port ${this.enrivonment.port}`));
    }

}