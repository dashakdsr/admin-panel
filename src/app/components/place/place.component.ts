import { Component, OnInit } from '@angular/core';

import {InfoCity} from '../../services/info-city.service';
import {Company} from '../../services/company.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  cities: any;
  companies: any;

  constructor(
    private infoCity: InfoCity,
    private company: Company
  ) { }

  ngOnInit() {
    this.company.getCompanies().subscribe((result) => {
      this.companies = result;
    })
  }

}
