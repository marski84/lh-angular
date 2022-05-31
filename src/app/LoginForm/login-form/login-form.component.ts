import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of, ReplaySubject } from 'rxjs';
import { LoginService } from '../login.service';

export interface LoginData {
  email: string,
  password: string
}


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  loginForm: FormGroup;
  isChecked = false;
  invalidCredentials = false;



  constructor(public loginAuth: LoginService,
    private formBuilder: FormBuilder,
  ) {


    this.loginForm = formBuilder.group(
      {
        loginData: formBuilder.group(
          {
            email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            password: ['', [Validators.required, Validators.minLength(3)]]
          }
        ),
        rememberMe: ['',]
      },

    )
  };

  ngOnInit() {
    const login = window.localStorage.getItem('login');
    console.log(login);
    if (login) {
      this.emailInputField?.patchValue(login);
    };

    const checkBoxState = window.localStorage.getItem('isChecked');
    console.log(typeof (checkBoxState));


    if (checkBoxState === 'true') {
      this.rememberMeField!.patchValue(true);
    }
    else {
      this.rememberMeField!.patchValue(false);
    }


  }

  get emailInputField() {
    return this.loginForm.get(['loginData', 'email']);
  };

  get passwordInputField() {
    return this.loginForm.get(['loginData', 'password']);
  };

  get rememberMeField() {
    return this.loginForm.get('rememberMe');
  };

  handleSubmit(loginData: LoginData) {
    if (loginData) {
      this.loginAuth.onFormSubmit(loginData);
    };
  };

  saveLoginData() {
    if (!this.isChecked) {
      this.loginForm.get('rememberMe')?.patchValue(true);
      this.isChecked = true;
      window.localStorage.setItem('login', this.emailInputField!.value);
      window.localStorage.setItem('isChecked', String(this.isChecked));
    }
    else {
      this.loginForm.get('rememberMe')?.patchValue(false);
      this.isChecked = false;
      window.localStorage.removeItem('login');
      window.localStorage.removeItem('isChecked');
    };
  };

  test() {
    this.loginAuth.onValidCredentials();
  }


}
