import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoCityComponent } from './components/info-city/info-city.component';
import { PlaceComponent } from './components/place/place.component';
import { CompanyComponent } from './components/company/company.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { AddCityComponent } from './components/add-city/add-city.component';

const routes: Routes = [
  {path: '', component: InfoCityComponent},
  {path: 'info', component: InfoCityComponent},
  {path: 'place', component: PlaceComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'add-company', component: AddCompanyComponent},
  {path: 'add-city', component: AddCityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
