import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

/**
   * Prod changes: using an Interface to store all the prices and then display them
   * Prod additions: include option for user to define how long between intervals
   * Prod additions: replace interval timer with webhook.
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
  selectedSymbl = 'btc';

  // Price variables (default)
  USD_price: string = "-";
  GBP_price: string = "-";
  EUR_price: string = "-";
  JPY_price: string = "-";
  ZAR_price: string = "-";

  constructor(private http: HttpClient) {}

  /**
   * Starts to get and set the prices on page, every 1 second
   */
  startStream(){
    console.log("Starting the stream")
    this.timer = setInterval(()=> { 
      this.setPrices(this.selectedSymbl) 
    }, 1 * 1000);
  }

  /**
   * Stop interval timer
   */
  stopStream(){
    console.log("Stopping the stream")
    clearInterval(this.timer)
  }

  /**
   * Hits the NestJS endpoint to get prices and sets the values on the page
   */
  setPrices(symb: string){
    this.http.get(`http://localhost:3000/crypto/${symb}`).subscribe(res => {
      this.USD_price = res["USD"]
      this.GBP_price = res["GBP"]
      this.EUR_price = res["EUR"]
      this.JPY_price = res["JPY"]
      this.ZAR_price = res["ZAR"]
    })
  }

  /**
   * Capturing the change of a radop button selection and updating the 'selectedSymbl' var
   */
  radioButtonSelected(event: MatRadioChange){
    this.selectedSymbl = event.value
  }
}
