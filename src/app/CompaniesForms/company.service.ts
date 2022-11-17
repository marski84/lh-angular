import { Injectable } from '@angular/core';
import { ICompany } from './models/ICompany';
import { Company } from './models/Company';
import { IEmployee } from './models/IEmployee';



@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  first: ICompany = {
    name: 'sdsad',
    typeOfBusiness: 'Partnership',
    employees: [
      {
        firstName: 'dfdsfs',
        lastName: 'sdsadas',
        employeeAge: 50
      }
    ]
  }

  second: ICompany = {
    name: 'second',
    typeOfBusiness: 'Partnership',
    employees: [
      {
        firstName: 'dfdsfs',
        lastName: 'sdsadas',
        employeeAge: 50
      }
    ]
  }

  third = new Company('third', 'Partnerhip', [
    {
      firstName: 'third',
      lastName: 'third',
      employeeAge: 38
    },
    {
      firstName: 'super',
      lastName: 'duper',
      employeeAge: 38
    }
  ])


  companies = [this.first, this.second, this.third];




  constructor() { }

  createNewCompany(formData: any) {
    const { name, typeOfBusiness, companyEmployees } = formData;
    const company = new Company(name, typeOfBusiness, companyEmployees);
    this.companies.push(company);
  }

  addEmployeeToEmployeeList(company: Company, employeeData: IEmployee) {
    company.addNewEmployeeData(employeeData);
  }
}
