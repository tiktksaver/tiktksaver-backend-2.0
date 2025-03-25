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
        const data: any = await this.downloaderClient.getVideoV2(url);
        const complement = await this.downloaderClient.getVideoV3(url);

        const enrichedData = await this.downloaderClient.getVideoV1(url);

        console.log('DATA ==> ', data); // Nesse caso vem pouca informação, vem o necessário para efetuar o download
        console.log('Complement ==> ', complement); // Complemento para o nome do autor e para marca d'agua do vídeo e download em HD
        console.log('Tiktok Response ==> ', enrichedData); // Melhor conjunto de dados, vem todas as informações relevantes, porém, precisa de um tratamento de dados para selecionar o que realmente é válido 

        data.result.author.name = data.result.author.nickname;
        data.result.author.nickname = complement.result?.author?.nickname;

        if (data.result?.type == 'video') {
            data.result.videoHD = complement.result?.videoHD;
            data.result.videoWatermark = complement.result?.videoWatermark;
        }

        return data? new Downloader(data) : null;
    }
}