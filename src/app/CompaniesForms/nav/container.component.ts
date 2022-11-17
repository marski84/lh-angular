import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICompany } from '../models/ICompany';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class ContainerComponent implements OnInit {
  companies: ICompany[] = [];

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.companies = this.companyService.companies;
  }

  navigateToEditForm(indexInArray: number) {
    this.router.navigate(['companiesForm/company', indexInArray]);
  }
}
