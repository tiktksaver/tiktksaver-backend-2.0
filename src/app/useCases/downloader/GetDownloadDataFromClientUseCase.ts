import { AppError } from '@/shared/errors/AppError';
import Dependencies from '@/types/Dependencies';
import { IDownloadEntity } from '@/types/entity/Downloader';

export class GetDownloadDataFromClientUseCase {
    private downloadRepository: Dependencies['downloadRepository'];
    private logger: Dependencies['logger'];
    constructor({ downloadRepository, logger }: Pick<Dependencies, 'downloadRepository' | 'logger'>) {
        this.downloadRepository = downloadRepository;
        this.logger = logger;
    }

    async execute(url: string): Promise<IDownloadEntity> {
        const data = await this.downloadRepository.get(url);

        if (!data) {
            this.logger.error('Error trying get video data.');
            throw new AppError('Error trying get video data.', 404);
        }

        return data;
    }
}