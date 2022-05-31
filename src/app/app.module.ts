import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './AuthTokenRouter/home/home.component';
import { DashboardComponent } from './AuthTokenRouter/dashboard/dashboard.component';
import { LoginComponent } from './AuthTokenRouter/login/login.component';
import { NavigationComponent } from './AuthTokenRouter/navigation/navigation.component';
import { RatingComponent } from './RatingStars/rating/rating.component';
import { RatingsListComponent } from './RatingStars/ratings-list/ratings-list.component';
import { AverageScoreComponent } from './RatingStars/average-score/average-score.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarRatingModule } from 'angular-star-rating';
import { LoginFormComponent } from './LoginForm/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginDashboardComponent } from './LoginForm/login-dashboard/login-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    NavigationComponent,
    RatingComponent,
    RatingsListComponent,
    AverageScoreComponent,
    LoginFormComponent,
    LoginDashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StarRatingModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
