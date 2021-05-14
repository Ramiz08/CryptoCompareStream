import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getBTC() {
    return this.appService.getBTC();
  }

  @Get()
  getETH() {
    return this.appService.getETC();
  }

  @Get()
  getXRP() {
    return this.appService.getXRP();
  }

  @Get()
  getLTC() {
    return this.appService.getLTC();
  }

  @Get()
  getBCH() {
    return this.appService.getBCH();
  }
  
  @Get()
  getETC() {
    return this.appService.getETC();
  }
}
