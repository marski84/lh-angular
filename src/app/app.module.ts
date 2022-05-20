import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './AuthTokenRouter/home/home.component';
import { DashboardComponent } from './AuthTokenRouter/dashboard/dashboard.component';
import { LoginComponent } from './AuthTokenRouter/login/login.component';
import { NavigationComponent } from './AuthTokenRouter/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
