/* eslint-disable @typescript-eslint/no-explicit-any */
export type IDownloadEntity = {
    data: IDownloadData;
}

export type IDownloadData = {
    status: "success" | "error";
    message?: string;
    result?: IDownloadResult;
    resultNotParsed?: any;
}

export type IDownloadResult = {
    type: "video" | "image";
    id: string;
    createTime: number;
    description: string;
    author: IDownloadAuthor;
    statistics: IDownloadStatistics;
    hashtag: string[];
    isTurnOffComment: boolean;
    isADS: boolean;
    cover?: string[];
    dynamicCover?: string[];
    originCover?: string[];
    video?: IDownloadVideo;
    images?: string[];
    music: IDownloadMusic;
}


export type IDownloadAuthor = {
    uid: number;
    username: string;
    nickname: string;
    signature: string;
    region: string;
    avatarThumb: string[];
    avatarMedium: string[];
    url: string;
}

export type IDownloadStatistics = {
    playCount: number;
    downloadCount: number;
    shareCount: number;
    commentCount: number;
    diggCount: number;
    collectCount: number;
    forwardCount: number;
    whatsappShareCount: number;
    loseCount: number;
    loseCommentCount: number;
    repostCount: number;
}

export type IDownloadVideo = {
    ratio: string;
    duration: number;
    playAddr: string[];
    downloadAddr: string[];
    cover: string[];
    dynamicCover: string[];
    originCover: string[];
}

export type IDownloadMusic = {
    id: number;
    title: string;
    author: string;
    album: string;
    playUrl: string[];
    coverLarge: string[];
    coverMedium: string[];
    coverThumb: string[];
    duration: number;
    isCommerceMusic: boolean;
    isOriginalSound: boolean;
    isAuthorArtist: boolean;
}

export type IDownloadResponseParser = {
    content?: any;
    statistics?: IDownloadStatistics;
    author?: IDownloadAuthor;
    music?: IDownloadMusic;
}