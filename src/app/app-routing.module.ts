import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './AuthTokenRouter/navigation/navigation.component';
import { HomeComponent } from './AuthTokenRouter/home/home.component';
import { DashboardComponent } from './AuthTokenRouter/dashboard/dashboard.component';
import { LoginComponent } from './AuthTokenRouter/login/login.component';
import { RatingsListComponent } from './RatingStars/ratings-list/ratings-list.component';
import { LoginFormComponent } from './LoginForm/login-form/login-form.component';
import { LoginDashboardComponent } from './LoginForm/login-dashboard/login-dashboard.component';
import { ContainerComponent } from './Cart/container/container.component';
import { NotFoundComponentComponent } from './CompaniesForms/not-found-component/not-found-component.component';
import { NewCompanyComponentComponent } from './CompaniesForms/new-company-component/new-company-component.component';
import { EditCompanyComponentComponent } from './CompaniesForms/edit-company-component/edit-company-component.component';
import { GuestGuard } from './AuthTokenRouter/GuestGuard.service';
import { LoggedGuard } from './AuthTokenRouter/LoggedGuard.service';
import { ContainerComponent } from './CompaniesForms/nav/container.component';



const routes: Routes = [
  { path: 'ratingStars', component: RatingsListComponent },
  {
    path: 'loginform', component: LoginFormComponent
  },
  { path: 'logindashboard', component: LoginDashboardComponent },
  {
    path: 'authToken', component: NavigationComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [LoggedGuard] },
      {
        path: 'login', component: LoginComponent, canActivate: [GuestGuard]
      }
    ]
  },
  { path: 'cart', component: ContainerComponent },
  {
    // Nav to nawigacja a nie strona => przebuduj na containerComponent
    path: 'companiesForm', component: ContainerComponent, children: [
      { path: 'company/new', component: NewCompanyComponentComponent },
      { path: 'company/:id', component: EditCompanyComponentComponent },
      { path: '**', component: NotFoundComponentComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
