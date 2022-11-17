import { Component, OnInit } from '@angular/core';
import { ICompany } from '../models/ICompany';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-new-company-component',
  templateUrl: './new-company-component.component.html',
  styleUrls: ['./new-company-component.component.css']
})
export class NewCompanyComponentComponent implements OnInit {

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
  }

  getFormData(formData: any) {
    this.companyService.createNewCompany(formData);
  }

}
