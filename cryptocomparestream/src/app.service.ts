import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

  constructor(private http: HttpService){}

  /**
   * Prod changes: additional input of which fiat (or other) currencies user wants to see prices of (ie not fixed list as is currently) 
   * Prod changes: use the API key provided by CryptoCompare and have it as a GITHUB secret - that when deployed in CI/CD it is pulled by 
   * the project and used then. This will avoid the API being store in the project itself]
   * Prod changes: move all API endpoints into a dedicated service called APIService, havin this service to be used specifically for the App 
   * Prod additions: add endpoints that use the other options available from CryptoCompare
   */

  /**
   * Makes a HTTP GET request to CryptoCompare API to retrieve prices in USD/GBP/EUR/JPY/ZAR
   * Params: symbol of crypto to get data of (string)
   */
  getPrices(crypto: string): Observable<any>{
    return this.http.get(`https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=USD,GBP,EUR,JPY,ZAR`)
      .pipe(
        map(response => response.data)
      )
  }
}
