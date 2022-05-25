import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  loginForm: FormGroup;


  constructor(private loginAuth: LoginService,
    private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group(
      {
        loginData: formBuilder.group(
          {
            email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            password: ['', [Validators.required, Validators.minLength(3)]]
          }
        ),
        rememberMe: ['']
      },

    )
  }

  ngOnInit() {
    console.log(this.loginForm.get('loginData')?.get('email'));

  }

  get emailInputField() {
    return this.loginForm.get(['loginData', 'email']);
  };

  get passwordInputField() {
    return this.loginForm.get(['loginData', 'password']);
  };

  handleSubmit(event: any) {
    console.log(event);

  }

}
