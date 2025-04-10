/* eslint-disable @typescript-eslint/no-explicit-any */
import { Downloader } from "@/domain/entities/tiktokAPI/Downloader";
import { IDownloadRepository } from "@/domain/repositories/tiktokAPI/IDownloaderRepository";
import Dependencies from "@/types/Dependencies";
import { IDownloadEntity } from "@/types/entity/Downloader";


export class DownloaderRepository implements IDownloadRepository {
    private downloaderClient: Dependencies['downloaderClient'];
    private client: Dependencies['downloaderClientType'];
    constructor({ downloaderClient }: Pick<Dependencies, 'downloaderClient'>) {
        this.downloaderClient = downloaderClient;
        this.client = this.downloaderClient.getClient();
    }

    
    async get(url: string): Promise<IDownloadEntity | null> {
        const data: any = await this.downloaderClient.getVideoV1(url);

        return data? new Downloader(data) : null;
    }
}