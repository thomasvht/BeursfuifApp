import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { PriceEditComponent } from './modules/price-edit/price-edit.component';
import { PriceOverviewComponent } from './modules/price-overview/price-overview.component';
import { environment } from 'src/environments/environment';
import { ProductsService } from './services/products-https.service';
import { KassaComponent } from './modules/kassa/kassa.component';

const appRoutes: Routes = [
  {path: 'overview', component: PriceOverviewComponent},
  {path: 'edit', component: PriceEditComponent},
  {path: 'kassa', component: KassaComponent},
  {path: '**', redirectTo : '/overview', pathMatch: 'full'},
  {path: '', redirectTo: '/overview', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    KassaComponent,
    PriceEditComponent,
    PriceOverviewComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot()
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
