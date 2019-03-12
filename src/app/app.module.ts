import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PriceEditComponent } from './modules/price-edit/price-edit.component';
import { PriceOverviewComponent } from './modules/price-overview/price-overview.component';

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
