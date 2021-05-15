import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

/**
   * Prod changes: using an Interface to store all the prices and then display them
   * Prod addition: including option to have other crypto values shown as prices if not selected 
   * (ie when BTC is selected, it will show the prices for fiat and ETH/XRP/LTC/BCH/ETC)
   * Prod additions: Using Table component in Angular Material to better display the content
   * Prod additions: Enabling user to add which output currencies they wanted to see in the price stream
   * Prod additions: Use a file to store all static variables - similar to a config file.
   */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timer;
  selectedSymbl;

  // Price variables (default)
  USD_price: string = "-";
  GBP_price: string = "-";
  EUR_price: string = "-";
  JPY_price: string = "-";
  ZAR_price: string = "-";

  constructor(private http: HttpClient) {}

  startStream(){
    console.log("Starting the stream")
    this.timer = setInterval(()=> { this.setPrices(this.selectedSymbl) }, 1 * 1000);
  }

  stopStream(){
    console.log("Stopping the stream")
    clearInterval(this.timer) 
  }

  setPrices(symb: string){
    console.log("stream has started")
    this.http.get(`http://localhost:3000/crypto/${symb}`).subscribe(res => {
      this.USD_price = res["USD"]
      this.GBP_price = res["GBP"]
      this.EUR_price = res["EUR"]
      this.JPY_price = res["JPY"]
      this.ZAR_price = res["ZAR"]
    })
  }

  radioButtonSelected(event: MatRadioChange){
    this.selectedSymbl = event.value
  }
}
