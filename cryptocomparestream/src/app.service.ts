import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

  constructor(private http: HttpService){}

  getPrices(crypto: string): Observable<any>{
    return this.http.get(`https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=USD,GBP,EUR,JPY,ZAR`)
      .pipe(
        map(response => response.data)
      )
  }
}
