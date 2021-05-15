import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('btc')
  getBTC() {
    return this.appService.getPrices('btc');
  }

  @Get('eth')
  getETH() {
    return this.appService.getPrices('eth');
  }

  @Get('xrp')
  getXRP() {
    return this.appService.getPrices('xrp');
  }

  @Get('ltc')
  getLTC() {
    return this.appService.getPrices('ltc');
  }

  @Get('bch')
  getBCH() {
    return this.appService.getPrices('bch');
  }
  
  @Get('etc')
  getETC() {
    return this.appService.getPrices('etc');
  }
}
