import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  goodBearerToken = "f3823903b2dd6e35243b1bbe5a14f651";
  badBearerToken = "1c9de95d445fd0824b3bcf1def5f7bfb";

  constructor() { }
}
