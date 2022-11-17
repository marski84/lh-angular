import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard {

  constructor(private router: Router, private authService: AuthService) {

  }
  canActivate(route: ActivatedRouteSnapshot):
    boolean {

    const authToken = (route.queryParamMap.get('token'));

    const isTokenValid = this.authService.isValidToken(authToken);


    if (authToken && isTokenValid) {
      console.log('valid token redirect');
      this.router.navigate(['authToken/dashboard'],
        { queryParams: { 'token': this.authService.validBearerToken } });
      return false;
    }
    return true;
  };
};


// AuthGuard/LoggedGuard -> jeżeli nie mam tokenu to redirect na login
// GuestGuard -> masz token to wywal na dashboard

// dashboard/products => /dashboard
