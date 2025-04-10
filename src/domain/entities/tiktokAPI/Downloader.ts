import { IDownloadData, IDownloadEntity } from "@/types/entity/Downloader";

export class Downloader implements IDownloadEntity {
    data!: IDownloadData;
    constructor(data: IDownloadData) {
        this.data = data;
        this.data.result = data.result;
        this.data.status = data.status;
        this.data.message = data.message;
        this.data.resultNotParsed = data.resultNotParsed;
    }
}