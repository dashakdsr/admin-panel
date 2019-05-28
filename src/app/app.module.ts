import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSidenavModule,
  MatButtonModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';
import { InfoCityComponent } from './components/info-city/info-city.component';
import { PlaceComponent } from './components/place/place.component';
import { CompanyComponent } from './components/company/company.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AddCityComponent } from './components/add-city/add-city.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoCityComponent,
    PlaceComponent,
    CompanyComponent,
    AddCompanyComponent,
    AddCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_a-LvuPGKgezeAu9vorUFbndhfoJ1jq8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
