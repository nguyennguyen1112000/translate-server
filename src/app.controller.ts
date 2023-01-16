import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { AppService } from './app.service';
import { TranslateDto } from './translate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "Hello"
  }

  @Post()
  async create(@Body() translateDto: TranslateDto) {
    return this.appService.translate(translateDto);
  }
}
