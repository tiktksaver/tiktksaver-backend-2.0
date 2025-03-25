export interface IDownloadEntity {
    data: IDownloadData
}

export interface IDownloadData {
    status: string;
    result: IDownloadResult;
}

export interface IDownloadResult {
    type: string;
    desc: string;
    author: IDownloadAuthor;
    statistics: IDownloadStatistics;
    video: string;
    images: string[];
    music: string;
    videoHD: string;
    videoWatermark: string;
}

export interface IDownloadAuthor {
    avatar: string;
    nickname: string;
    name: string;
}

export interface IDownloadStatistics {
    likeCount: string;
    commentCount: string;
    shareCount: string;
}