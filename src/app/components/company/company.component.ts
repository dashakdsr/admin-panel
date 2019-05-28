import { Component, OnInit } from '@angular/core';
import {
  Router
} from '@angular/router';

import {Company} from '../../services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companies: any;

  constructor(
    private router: Router,
    private company: Company
  ) { }

  ngOnInit() {
    this.company.getCompanies().subscribe((response) => {
      this.companies = response;
    })
  }

  addCompany () {
    this.router.navigateByUrl('add-company')
  }

}
