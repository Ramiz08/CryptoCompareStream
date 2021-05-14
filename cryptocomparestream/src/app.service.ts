import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

  constructor(private http: HttpService){}

  getBTC(){
    return this.http.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,GBP,EUR,JPY,ZAR')
      .pipe(
        map(response => response.data)
      )
  }

  getETH(){
    return this.http.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,GBP,EUR,JPY,ZAR')
      .pipe(
        map(response => response.data)
      )
  }

  getXRP(){
    return this.http.get('https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD,GBP,EUR,JPY,ZAR')
      .pipe(
        map(response => response.data)
      )
  }

  getLTC(){
    return this.http.get('https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,GBP,EUR,JPY,ZAR')
      .pipe(
        map(response => response.data)
      )
  }

  getBCH(){
    return this.http.get('https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD,GBP,EUR,JPY,ZAR')
      .pipe(
        map(response => response.data)
      )
  }

  getETC(){
    return this.http.get('https://min-api.cryptocompare.com/data/price?fsym=ETC&tsyms=USD,GBP,EUR,JPY,ZAR')
      .pipe(
        map(response => response.data)
      )
  }
}
