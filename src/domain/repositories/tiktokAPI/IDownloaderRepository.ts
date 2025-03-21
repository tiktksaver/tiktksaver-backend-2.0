import { IDownloadEntity } from "@/types/entity/Downloader";

export interface IDownloadRepository {
    get(url: string): Promise<IDownloadEntity | null>;
};