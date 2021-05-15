import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Price variables (default)
  USD_price: string = "-";
  GBP_price: string = "-";
  EUR_price: string = "-";
  JPY_price: string = "-";
  ZAR_price: string = "-";

  constructor(private http: HttpClient) {}

  getBTC(crypto: string){
    this.http.get(`http://localhost:3000/${crypto}`).subscribe(res => {
      this.USD_price = res["USD"]
      this.GBP_price = res["GBP"]
      this.EUR_price = res["EUR"]
      this.JPY_price = res["JPY"]
      this.ZAR_price = res["ZAR"]
    })
  }
}
