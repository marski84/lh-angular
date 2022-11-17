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
    private authService: AuthService) { }

  ngOnInit(): void {
    this.validToken = this.authService.validBearerToken;
    this.invalidToken = this.authService.invalidBearerToken;
  };

}
