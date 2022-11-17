import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

//   * jeśli w urlu jest przekazywane query `?token=f3823903b2dd6e35243b1bbe5a14f651`, to użytkownik może wejść na wszystkie routy z wyjątkiem login(zostaje przekierowany na`/dashboard`),
// * jeśli w GET lub podczas routingu w urlu jest przekazywane query`?token=1c9de95d445fd0824b3bcf1def5f7bfb`, lub nie ma argumentów to użytkownik może wejść na `/` oraz`/login`.Route `dashboard` przekierowuje na`/login`

@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const authToken = route.queryParamMap.get('token');
    const isTokenValid = this.authService.isValidToken(authToken);

    if (!authToken || (authToken && !isTokenValid)) {
      this.router.navigate(['authToken/login']);
      return false;
    }
    return true;
  }
}

//
