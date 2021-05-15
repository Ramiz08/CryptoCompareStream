import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

  constructor(private http: HttpService){}

  getPrices(crypto: string){
    return this.http.get(`https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=USD,GBP,EUR,JPY,ZAR`)
      .pipe(
        map(response => response.data)
      )
  }
}
