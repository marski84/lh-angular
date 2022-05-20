import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  validToken: string | undefined;
  invalidToken: string | undefined;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.validToken = this.authService.goodBearerToken;
    this.invalidToken = this.authService.badBearerToken;
  }


  public handleRedirectWithValidToken(): void {
    this.router.navigate(['/authToken/login'], {
      queryParams: { token: this.authService.goodBearerToken }
    }
    );
  };

  public handleRedirectWithInvalidToken(): void {
    this.router.navigate(['/authToken/login'], {
      queryParams: { token: this.authService.badBearerToken }
    }
    );
  };

}
