import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola';
  }

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  // principio solid
  // SINGLE RESPONSIBILITY
}
