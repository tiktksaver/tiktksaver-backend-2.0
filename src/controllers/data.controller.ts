import { Controller, Route, Post, Body } from 'tsoa';
import { DataService } from '../services/data.service';

@Route('data')
export class DataController extends Controller {

  /**
   * Processa e retorna dados extraídos a partir da URL do vídeo informado.
   * @summary Processa a URL do vídeo e retorna os dados relacionados
   */
  @Post('/')
  public async getData(@Body() req: { videoURL: string }): Promise<string> {
    return DataService.getData(req.videoURL);
  }
}
