import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// rename na guard
// rozbić na 2 guardy
// 1 guard authGuard
// 2 quest guard
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  validBearerToken = "f3823903b2dd6e35243b1bbe5a14f651";
  invalidBearerToken = "1c9de95d445fd0824b3bcf1def5f7bfb";

  constructor() { }

  isValidToken(token: string | null): boolean {
    if (token === null || token === this.invalidBearerToken) {
      return false;
    }
    return true;
  }
};

