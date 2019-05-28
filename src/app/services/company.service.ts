import { Injectable } from '@angular/core';
import { config } from '../app.config';

import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class Company {

  constructor (
    private api: Api
  ) {}

  getCompanies(method) {
    return this.api.get({
      uri: `v1/companies`
    }).subscribe(method, err => this.handleError(err));
  }

  getCompany(id, method) {
    return this.api.get({
      uri: `v1/companies/${id}`
    }).subscribe(method, err => this.handleError(err));
  }

  addCompany(data, method) {
    return this.api.post({
      uri: `v1/companies`,
      body: data
    }).subscribe(method, err => this.handleError(err));
  }

  editCompany (id, data, method) {
    return this.api.put({
      uri: `v1/companies/${id}`,
      body: data
    }).subscribe(method, err => this.handleError(err));
  }

  handleError (err) {
    console.log(err);
  }
}
