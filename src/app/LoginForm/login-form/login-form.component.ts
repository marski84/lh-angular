import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Subject } from 'rxjs/internal/Subject';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  // https://www.youtube.com/watch?v=sj4ApeHzMQo

  // iinna opcja na tworzneie formularza
  loginForm2: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required)
  });
  //


  loginForm: FormGroup;
  invalidCredentials = false;
  onDestroy$ = new Subject();
  isValidAuthorization: boolean | undefined;

  get emailCtrl() {
    return this.loginForm.get(['loginData', 'email']) as FormControl;
  };

  get passwordCtrl() {
    return this.loginForm.get(['loginData', 'password']) as FormControl;
  };

  get rememberMeCtrl() {
    return this.loginForm.get('rememberMe') as FormControl;
  };


  constructor(public loginService: LoginService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = formBuilder.group(
      {
        loginData: formBuilder.group(
          {
            email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            password: ['', [Validators.required, Validators.minLength(3)]]
          }
        ),
        rememberMe: [false]
      },
    );
  };

  ngOnInit() {
    const login = window.localStorage.getItem('login');
    if (login) {
      this.emailCtrl.setValue(login);
      this.rememberMeCtrl.setValue(window.localStorage.getItem('isChecked'))
    };
  };

  saveLoginData() {
    if (this.rememberMeCtrl.value === true) {
      window.localStorage.setItem('login', this.emailCtrl.value);
      window.localStorage.setItem('isChecked', this.rememberMeCtrl.value);
    };
  };

  handleSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    // koniecznie zmienić nazwe na login + wyciągnac reakcje na poprawne logowanie/błąd do komponentu- ok

    const isAuthorized = this.loginService.onLoginAttempt(this.loginForm.value.loginData);

    // this.loginService.onValidCredentials(passy); => dac na if'a
    if (isAuthorized) {
      this.router.navigate(['logindashboard']);
      this.saveLoginData();
    };
  };

  handleCheckBoxState() {
    this.rememberMeCtrl.setValue(!this.rememberMeCtrl.value);
  };

};
