import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { CompanyService } from '../company.service';
import { ICompany } from '../models/ICompany';
import { Company } from '../models/Company';

@Component({
  selector: 'app-edit-company-component',
  templateUrl: './edit-company-component.component.html',
  styleUrls: ['./edit-company-component.component.css']
})
export class EditCompanyComponentComponent implements OnInit {


  companyData!: any;
  companyIndex: number | undefined;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService
  ) {

  }

  ngOnInit(): void {
    const companyIndex = Number(this.router.url.split('/')[3]);
    this.companyIndex = companyIndex;
    this.companyData = this.companyService.companies[companyIndex];
  };

  getEditedData(data: any) {
    console.log(data);

    this.companyService.addEmployeeToEmployeeList(this.companyData, data);
  };

}
