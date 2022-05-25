import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './AuthTokenRouter/navigation/navigation.component';
import { HomeComponent } from './AuthTokenRouter/home/home.component';
import { DashboardComponent } from './AuthTokenRouter/dashboard/dashboard.component';
import { LoginComponent } from './AuthTokenRouter/login/login.component';
import { AuthService } from './AuthTokenRouter/auth.service';
import { RatingsListComponent } from './RatingStars/ratings-list/ratings-list.component';
import { LoginFormComponent } from './LoginForm/login-form/login-form.component';


const routes: Routes = [
  { path: 'ratingStars', component: RatingsListComponent },
  {
    path: 'loginform', component: LoginFormComponent
  },
  {
    path: 'authToken', component: NavigationComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthService] },
      { path: 'login', component: LoginComponent, canActivate: [AuthService] }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
