import { Injectable } from '@angular/core';
import { config } from '../app.config';

import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class InfoCity {

  constructor (
    private api: Api
  ) { }

  getCities (countryId, method) {
    return this.api.get({
      uri: `v1/cities?countryId=${countryId}`
    }).subscribe(method, err => this.handleError(err));
  }

  getCountries (method) {
    return this.api.get({
      uri: `v1/countries`
    }).subscribe(method, err => this.handleError(err));
  }

  getCitiesByName (name, method) {
    return this.api.get({
      uri: `v1/cities?name=${name}`
    }).subscribe(method, err => this.handleError(err));
  }

}
