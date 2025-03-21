import { AppError } from '@/shared/errors/AppError';
import Dependencies from '@/types/Dependencies';
import { Request, Response } from 'express';

interface IDownloaderController {
    getVideoData(req: Request, res: Response): Promise<Response>;
}

export class DownloaderController implements IDownloaderController {
    private environment: Dependencies['environment'];
    private getDownloadDataFromClientUseCase: Dependencies['getDownloadDataFromClientUseCase'];
    private logger: Dependencies['logger'];

    constructor({
        environment,
        logger,
        getDownloadDataFromClientUseCase
    }: Pick<Dependencies, 'environment' | 'logger' | 'getDownloadDataFromClientUseCase'>) {
        this.environment = environment;
        this.logger = logger;
        this.getDownloadDataFromClientUseCase = getDownloadDataFromClientUseCase;
    }

    public getVideoData = async (
        req: Request,
        res: Response,
    ): Promise<Response> => {
        const callName = `${this.constructor.name}.create()`;
        try {
            const data = req.query.url as string;

            const download = await this.getDownloadDataFromClientUseCase.execute(data);

            return res.status(200).json(download);
        } catch (err: unknown) {
            if (err instanceof AppError) {
                console.error(
                    JSON.stringify({
                        message: `[REQUEST ERROR] - ${callName}`,
                        stack: err.stack,
                    }),
                );
                this.logger.error(`[REQUEST ERROR] - ${err.message}`); // TODO: Centralizar logs apenas na instancia do erro deles
                return res.status(err.status).json({ message: err.stack });
            }

            return res
                .status(500)
                .json({ stack: `[REQUEST ERROR] - Bad Request` });
        }
    };
}
