/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Router } from 'express';
import Dependencies from '@/types/Dependencies';

export class DownloadRoutes {
    private router: any;
    private downloaderController: Dependencies['downloaderController'];
    private schemaMiddleware: Dependencies['schemaMiddleware'];

    constructor({ downloaderController, schemaMiddleware }: Pick<Dependencies, 'downloaderController' | 'schemaMiddleware' >) {
        this.downloaderController = downloaderController;
        this.schemaMiddleware = schemaMiddleware;
        this.router = Router();
    }
    public init(): Router {

        this.router.get('/download/tiktok', this.downloaderController.getVideoData);

        return this.router;
    }
}
