import { Injectable } from '@angular/core';
import { config } from '../app.config';

import { Api } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class Place {

  constructor (
    private api: Api
  ) {}

  addDiscount (data, method) {
    return this.api.post({
      uri: 'v1/discount',
      body: data
    }).subscribe(method, err => console.log(err))
  }
}
