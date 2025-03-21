import { createContainer, asClass, asValue, InjectionMode } from "awilix";
import { App } from "../Application";

// infra
import { ElasticSearchClient } from "@/infra/integration/elasticSearch/client";
import { ElasticSearchLogsRepository } from "@/infra/integration/elasticSearch/repositories/ElasticSearchLogsRepository";
import { Logger } from "@/infra/integration/elasticSearch/logger";

// domain

// app
import { GetLogsUseCase } from "@/app/useCases/log/GetLogsUseCase";
import { GetLogsFormattedUseCase } from "@/app/useCases/log/GetLogsFormattedUseCase";

// interface
import { DownloadRoutes } from "@/interface/http/routes/DownloaderRoutes";
import { LogRoutes } from "@/interface/http/routes/LogsRoutes";
import { DownloaderController } from '@/interface/http/controllers/DownloaderController';
import { LogsController } from "@/interface/http/controllers/LogsController";

// config
import { environment } from "../Environment";

// shared
import SchemaMiddleware from "@/interface/http/middlewares/SchemaMiddleware";
import { GetDownloadDataFromClientUseCase } from "@/app/useCases/downloader/GetDownloadDataFromClientUseCase";
import { DownloaderRepository } from "@/infra/integration/tiktokApi/repositories/DownloaderRepository";
import { DownloaderClient } from "@/infra/integration/tiktokApi/client";

const container = createContainer({
    injectionMode: "PROXY",
});

container.register({
    /* APP */
    /* Use Cases - */
    /* Logs -- */
    getLogsUseCase: asClass(GetLogsUseCase).singleton(),
    getLogsFormattedUseCase: asClass(GetLogsFormattedUseCase).singleton(),
    /* Downloader -- */
    getDownloadDataFromClientUseCase: asClass(GetDownloadDataFromClientUseCase).singleton(),
    /* Services - */

    /* DOMAIN */
    /* Entity - */

    /* INFRA */
    /* Integration - */
    elasticSearchClient: asClass(ElasticSearchClient).singleton(),
    downloaderClient: asClass(DownloaderClient).singleton(),
    logger: asClass(Logger).singleton(),
    /* Repository -- */
    downloadRepository: asClass(DownloaderRepository).singleton(),
    logsRepository: asClass(ElasticSearchLogsRepository).singleton(),

    /* INTERFACE */
    /* HTTP */
    /* Controller - */
    downloaderController: asClass(DownloaderController).singleton(),
    logsController: asClass(LogsController).singleton(),
    /* Routes - */
    downloadRoutes: asClass(DownloadRoutes).singleton(),
    logRoutes: asClass(LogRoutes).singleton(),
    /* Services - */
    /* Middlewares - */
    schemaMiddleware: asClass(SchemaMiddleware).singleton(),

    /* CONFIG */
    environment: asValue(environment),
    app: asClass(App).singleton(),

    /* SHARED */
}).loadModules(
    [
        '../../app/dto/**/*(*.ts)',
        '../../app/useCases/**/*(*.ts)',
        '../../app/services/**/*(*.ts)',
        '../../config/**/*(*.ts)',
        '../../config/*(*.ts)',
        '../../domain/**/*(*.ts)',
        '../../infra/orm/**/*(*.ts)',
        '../../infra/**/*(*.ts)',
        '../../interface/http/**/*(*.ts)',
        '../../shared/**/*(*.ts)'
    ], {
        cwd: __dirname,
        formatName: 'camelCase',
        resolverOptions: {
            injectionMode: InjectionMode.PROXY
        }
    }
);

// Inicializa a aplicação diretamente no contêiner
container.resolve<App>("app").start();

export default container;