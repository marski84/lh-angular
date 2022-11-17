import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from './LoginDataInterface';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  invalidCredentials = false;

  constructor(private router: Router) { }

  onLoginAttempt(loginData: LoginData) {
    const { email, password } = loginData;
    const areCredentialsValid = this.checkCredentials(email, password);

    if (!areCredentialsValid) {
      return this.onInvalidCredentials();
    }
    return this.onValidCredentials();

  };

  checkCredentials(email: string, password: string): boolean {
    return email === 'test@o2.pl' && password === '123123';
  }

  onValidCredentials() {
    return true;
  }

  onInvalidCredentials() {
    this.invalidCredentials = true;

    setTimeout(
      () => {
        this.invalidCredentials = false;
      }, 3000
    );
    return false;
  };

};
