import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from './login-form/login-form.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  invalidCredentials = false;

  constructor(private router: Router) { }

  onFormSubmit(loginData: LoginData) {
    const { email, password } = loginData;
    const areCredentialsValid = this.checkCredentials(email, password);

    if (!areCredentialsValid) {
      this.onInvalidCredentials();
    }
    else {
      this.onValidCredentials();
    };
  };

  checkCredentials(email: string, password: string): boolean {
    return email === 'test@o2.pl' && password === '123123';
  }

  onValidCredentials() {
    this.router.navigate(['logindashboard']);
  }

  onInvalidCredentials() {
    this.invalidCredentials = true;

    setTimeout(
      () => {
        this.invalidCredentials = false;
      }, 3000
    );
  };
};
