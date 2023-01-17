import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { firstValueFrom } from 'rxjs';
import { TranslateDto } from './translate.dto';
@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  async translate({ content, sourceLang, targetLang, authKey }: TranslateDto) {
    const resp = await firstValueFrom(
      this.httpService.post(
        `https://api-free.deepl.com/v2/translate`,
        {
          text: content,
          source_lang: sourceLang,
          target_lang: targetLang,
        },
        {
          headers: {
            Authorization: authKey,
          },
        },
      ),
    );
    return resp.data;
  }
}
