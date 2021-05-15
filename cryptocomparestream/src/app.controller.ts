import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Prod addition: having a endpoint that will check health of services; to check if NestJS server is alive, if cryptocompare is working etc.
   */

   @Get('crypto/:symb')
   getCryptoPrice(@Param('symb') symb) {
     return this.appService.getPrices(symb);
   }
}
