import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Prod addition: error handling for cases when symb is not valid
   * Prod addition: having a endpoint that will check health of services; to check if NestJS server is alive, if cryptocompare is working etc.
   */

  /**
   * Params: takes user inputted data ':symb' and passes it to the AppService func `getPrices`
   */
   @Get('crypto/:symb')
   getCryptoPrice(@Param('symb') symb) {
     return this.appService.getPrices(symb);
   }
}
