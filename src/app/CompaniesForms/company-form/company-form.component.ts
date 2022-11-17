import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { ICompany } from '../models/ICompany';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
  // nie piszemy input/output w nazwie zmiennej
  @Input() companyDataInput?: ICompany;
  // Output -> nazywamy czasownikiem w czasie przeszłym tzn. companyFormSubmitted / companyCreated
  // Jeden Output po submicie formularza
  // Typowanie zmienić na companyI ewentualnie napisać typ dla danych emitowanych
  @Output() companyData: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() editedCompanyData: EventEmitter<Object> = new EventEmitter<Object>();

  // wywalić zastąpić inputem
  isEdit: boolean = false;

  companyForm = this.fb.group({
    name: ['', [Validators.required]],
    typeOfBusiness: ['', [Validators.required]],
    companyEmployees: this.fb.array([
      this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        employeeAge: ['', Validators.required]
      })
    ])
  });

  get companyNameCtrl() {
    return this.companyForm.get(['name']) as FormControl;
  };

  get companyBusinessTypeFormCtrl() {
    return this.companyForm.get(['typeOfBusiness']) as FormControl;
  };

  get companyEmployees() {
    return this.companyForm.controls['companyEmployees'] as FormArray;
  };

  companyEmployeesNameCtrl(empIndex: number) {
    return this.companyEmployees.at(empIndex) as FormGroup
  };



  typeOfBusinessSelectOptions = [
    {
      value: 'Sole proprietorship', viewValue: 'Sole proprietorship'
    }, { value: 'Partnership', viewValue: 'Partnership' },
    { value: 'Limited liability company (LLC)', viewValue: 'Limited liability company (LLC)' },
    { value: 'Limited liability company (LLC)', viewValue: 'Limited liability company (LLC)' },
    { value: 'Corporation - C corp', viewValue: 'Corporation - C corp' },
    { value: 'Corporation - S corp', viewValue: 'Corporation - S corp' },
    { value: 'Corporation - B corp', viewValue: 'Corporation - B corp' },
    { value: 'Corporation - nonprofit', viewValue: 'Corporation - nonprofit' },
  ]


  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    console.log(this.companyDataInput);
    if (this.companyDataInput) {
      this.isEdit = true;
      const employeeArrayLength = this.companyDataInput.employees.length;
      // this.companyEmployees.push();

      console.log(employeeArrayLength);
      this.companyNameCtrl.setValue(this.companyDataInput.name);
      this.companyBusinessTypeFormCtrl.setValue(this.companyDataInput.typeOfBusiness);


      // if (employeeArrayLength > 1) {
      // }
      this.companyDataInput.employees.forEach((employee, index) => {
        // this.companyEmployees.controls[index].setValue(employee);
        this.addEmployeeFormsOninit(employeeArrayLength - 1);
        // addEmployeeForm() => tutaj przekaż dane
      }
      );
    };
  };

  addEmployeeFormsOninit(numberOfEmployees: number): any {
    if (numberOfEmployees !== 0) {
      this.addEmployeeForm();
      return this.addEmployeeFormsOninit(numberOfEmployees - 1);
    }
  }


  onSubmit(form: FormGroup) {
    console.log(form);
    this.companyData.emit(form);
    this.companyForm.reset();
    this.companyForm.controls[0].markAsPristine();
  };

  editCompanyData() {
    console.log(this.companyForm.value);

    this.editedCompanyData.emit(this.companyForm.value);
  }



  // dodał opcjonalne dane wchodzące
  addEmployeeForm() {
    const employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      employeeAge: ['', Validators.required]
      // level: ['beginner', Validators.required]
    });
    this.companyEmployees.push(employeeForm);
  }

  deleteEmployeeForm(employeeIndex: number) {
    this.companyEmployees.removeAt(employeeIndex);
  }

}
