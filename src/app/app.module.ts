import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PriceEditComponent } from './modules/price-edit/price-edit.component';
import { PriceOverviewComponent } from './modules/price-overview/price-overview.component';

const appRoutes: Routes = [
  {
    path: 'overview', component: PriceOverviewComponent
  },
  {
    path: 'edit', component: PriceEditComponent
  },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    PriceEditComponent,
    PriceOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
