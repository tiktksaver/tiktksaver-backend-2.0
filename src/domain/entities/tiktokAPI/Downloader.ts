import { IDownloadData, IDownloadEntity } from "@/types/entity/Downloader";

export class Downloader implements IDownloadEntity {
    data!: IDownloadData;
    constructor(data: IDownloadData) {
        this.data = data;
        this.data.result = data.result;
        this.data.status = data.status;
        this.data.result.author = data.result.author;
        this.data.result.desc = data.result.desc;
        this.data.result.music = data.result.music;
        this.data.result.statistics = data.result.statistics;
        this.data.result.type = data.result.type;
        this.data.result.video = data.result.video;
        this.data.result.videoHD = data.result.videoHD;
        this.data.result.videoWatermark = data.result.videoWatermark;
    }
}