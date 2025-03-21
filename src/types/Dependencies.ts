// infra
import { ElasticSearchClient } from '@/infra/integration/elasticSearch/client';
import { DownloaderClient, DownloaderClientType } from '@/infra/integration/tiktokApi/client';
import { Logger } from '@/infra/integration/elasticSearch/logger';
import { DownloaderRepository } from '@/infra/integration/tiktokApi/repositories/DownloaderRepository';
import { ElasticSearchLogsRepository } from '@/infra/integration/elasticSearch/repositories/ElasticSearchLogsRepository';

// domain
import { ILogsRepository } from '@/domain/repositories/elastic/ILogsRepository';
import { IDownloadRepository } from '@/domain/repositories/tiktokAPI/IDownloaderRepository';

// app
import { GetLogsUseCase } from '@/app/useCases/log/GetLogsUseCase';
import { GetLogsFormattedUseCase } from '@/app/useCases/log/GetLogsFormattedUseCase';
import { GetDownloadDataFromClientUseCase } from '@/app/useCases/downloader/GetDownloadDataFromClientUseCase';

// interface
import { DownloaderController } from '@/interface/http/controllers/DownloaderController';
import { DownloadRoutes } from '@/interface/http/routes/DownloaderRoutes';
import { LogRoutes } from '@/interface/http/routes/LogsRoutes';
import { LogsController } from '@/interface/http/controllers/LogsController';

// Shared

// Types
import { EnvironmentVariables } from '@/types/Environment';


// Default Imports
import SchemaMiddleware from '@/interface/http/middlewares/SchemaMiddleware';

export default interface Dependencies {
    /* INFRA - */
        /* Integration */
        elasticSearchClient: ElasticSearchClient;
        downloaderClient: DownloaderClient;
        downloaderClientType: DownloaderClientType;
        logger: Logger;
            /* Repository */
            downloaderRepository: DownloaderRepository
            elasticSearchLogsRepository: ElasticSearchLogsRepository;

    /* DOMAIN - */
        /* Entity */
        /* Repository */
        logsRepository: ILogsRepository;
        downloadRepository: IDownloadRepository

    /* APP - */
        /* Use Cases*/
            /* Log */
            getLogsUseCase: GetLogsUseCase;
            getLogsFormattedUseCase: GetLogsFormattedUseCase;
            /* Downloader */
            getDownloadDataFromClientUseCase: GetDownloadDataFromClientUseCase;
        /* Services */

    /* INTERFACE - */
        /* HTTP */
            /* Controller */
            downloaderController: DownloaderController;
            logsController: LogsController;
            /* Routes */
            ////////////// tiktok routes here
            downloadRoutes: DownloadRoutes;
            logRoutes: LogRoutes;
            /* Services */
            /* Middlewares */
            schemaMiddleware: SchemaMiddleware;

    /* CONFIG - */
        /* Environment */
        environment: EnvironmentVariables;
    
    /* SHARED - */
        /* Enums */
        /* Utils */

// eslint-disable-next-line semi
};
