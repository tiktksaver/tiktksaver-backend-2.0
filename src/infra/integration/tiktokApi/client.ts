import { AppError } from '@/shared/errors/AppError';
import Dependencies from '@/types/Dependencies';
import Downloader from '@tobyg74/tiktok-api-dl';
import { MusicalDownResponse } from '@tobyg74/tiktok-api-dl/lib/types/downloader/musicaldown';
import { SSSTikResponse } from '@tobyg74/tiktok-api-dl/lib/types/downloader/ssstik';


export type DownloaderClientType = typeof Downloader;

export class DownloaderClient {
    public client: DownloaderClientType;
    private environment: Dependencies['environment'];
    constructor({ environment }: Pick<Dependencies, 'environment'>) {
        this.environment = environment;
        this.client = Downloader;
    }

    public async getVideoV3(url: string): Promise<MusicalDownResponse> {
        const callName = `${this.constructor.name}.${this.getVideoV3.name}()`;
        try {
            return await this.client.Downloader(url, {
                version: 'v3'
            });
        } catch (err) {
            throw new AppError(`Error on ${callName} \nStack: ${err}`, 500);
        }
        
    }

    public async getVideoV2(url: string): Promise<SSSTikResponse> {
        const callName = `${this.constructor.name}.${this.getVideoV2.name}()`;
        try {
            return await this.client.Downloader(url, {
                version: 'v2'
            });
        } catch (err) {
            throw new AppError(`Error on ${callName} \nStack: ${err}`, 500);
        }
    }


    public getClient(): DownloaderClientType {
        return this.client;
    }
}