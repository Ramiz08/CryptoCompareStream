import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';

/**
 * Using this array to store all components needed for front end
 * Adding to this will allow 'app' to use the component without importing itself
 */
const MaterialComponents = [
  MatButtonModule,
  MatRadioModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
