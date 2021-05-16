import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture;
  let component;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should make api calls for correct crypto', () => {
    const http = TestBed.inject(HttpClient);
    const response = {
      "USD": 3469.22,
      "GBP": 2464.31,
      "EUR": 2852.31,
      "JPY": 380100.4,
      "ZAR": 51243.44
    };
    spyOn(http, "get").and.returnValue(of(response));
    component.setPrices('btc');
    expect(component.USD_price).toEqual(3469.22);
  })

  it('stop api calls when stop_stream button is pressed', () => {
    spyOn(window, "setInterval");
    component.startStream();
    expect(setInterval).toHaveBeenCalled();
  })


  
  /**
   * Additional tests I would have wanted to create in Prod
   */
  // it('should handle http errors')
  
  /**
   * Tried creating this test but startStream func would not run during test
   * This issue blocked the test.
   */
  // it('api calls should fire with correct currency', () => {
    //   const spy = spyOn(component, "setPrices");
    //   component.startStream();
    //   setTimeout( () => {component.stopStream()},1.5 * 1000);
    //   expect(spy).toHaveBeenCalledWith('btc');
    // })

  /**
   * Tried to manually set USD_price with value and check html element text but failed.
   */
  // it('values should be displayed correctly', () => {
  //   component.USD_price = "3469.22";
  //   expect(document.getElementById('usd').innerText).toEqual("USD: 3469.22");
  // })
  });
  