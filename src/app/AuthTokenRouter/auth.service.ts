import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  validBearerToken = "f3823903b2dd6e35243b1bbe5a14f651";
  invalidBearerToken = "1c9de95d445fd0824b3bcf1def5f7bfb";

  constructor(private _router: Router) { }


  //   * jeśli w urlu jest przekazywane query `?token=f3823903b2dd6e35243b1bbe5a14f651`, to użytkownik może wejść na wszystkie routy z wyjątkiem login(zostaje przekierowany na`/dashboard`),
  // * jeśli w GET lub podczas routingu w urlu jest przekazywane query`?token=1c9de95d445fd0824b3bcf1def5f7bfb`, lub nie ma argumentów to użytkownik może wejść na `/` oraz`/login`.Route `dashboard` przekierowuje na`/login`

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):

    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const url = state.url.split('?')[0];
    const authToken = (route.queryParamMap.get('token'));

    console.log(url, authToken);

    if (authToken !== null && authToken === this.validBearerToken && url === '/authToken/login') {

      console.log('redirect');
      this._router.navigate(['authToken/dashboard'],
        { queryParams: { 'token': this.validBearerToken } });


      return false;
    } else if (authToken && authToken === this.invalidBearerToken && url === '/authToken/dashboard') {
      console.log(2);
      this._router.navigate(['authToken/login']);
      return false;
    } else if (authToken === null && url === '/authToken/dashboard') {
      console.log(3);
      this._router.navigate(['authToken/login']);
      return false;
    }



    // switch (authToken) {
    //   case (authToken && authToken === this.validBearerToken && url === '/authToken/login'):
    //     console.log('sukces');
    //     this._router.navigate(['/authToken/dashboard']);
    //     return false;

    //   case (authToken && authToken === this.invalidBearerToken && url === '/authToken/dashboard'):
    //     console.log('nienie');
    //     return false;

    //   case (authToken && authToken === null && url === '/authToken/dashboard'):
    //     console.log('nienie');
    //     return false;
    //       }

    return true;

  };


}

