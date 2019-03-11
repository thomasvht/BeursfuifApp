import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PriceEditComponent } from './price-edit/price-edit.component';
import { PriceOverviewComponent } from './price-overview/price-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceEditComponent,
    PriceOverviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
