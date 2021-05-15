import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';

/**
 * Using this array to store all components needed for front end
 * Adding to this will allow 'app' to use the component without importing itself
 */
const MaterialComponents = [
  MatButtonModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
