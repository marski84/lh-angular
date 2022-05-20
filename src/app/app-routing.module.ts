import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './AuthTokenRouter/navigation/navigation.component';
import { HomeComponent } from './AuthTokenRouter/home/home.component';
import { DashboardComponent } from './AuthTokenRouter/dashboard/dashboard.component';
import { LoginComponent } from './AuthTokenRouter/login/login.component';

const routes: Routes = [
  {
    path: 'authToken', component: NavigationComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'login', component: LoginComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
