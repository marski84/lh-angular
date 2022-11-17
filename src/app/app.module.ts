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
import { CartComponent } from './Cart/cart/cart.component';
import { ProductComponent } from './Cart/product/product.component';
import { ProductListComponent } from './Cart/product-list/product-list.component';
import { ContainerComponent } from './Cart/container/container.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BadgeComponent } from './Cart/cart/badge/badge.component';
import { NewCompanyComponentComponent } from './CompaniesForms/new-company-component/new-company-component.component';
import { EditCompanyComponentComponent } from './CompaniesForms/edit-company-component/edit-company-component.component';
import { NotFoundComponentComponent } from './CompaniesForms/not-found-component/not-found-component.component';
import { CompanyFormComponent } from './CompaniesForms/company-form/company-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TruncateTextPipe } from './Cart/truncate-text.pipe';



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
    LoginDashboardComponent,
    CartComponent,
    ProductComponent,
    ProductListComponent,
    TruncateTextPipe,
    ContainerComponent,
    BadgeComponent,
    ContainerComponent,
    NewCompanyComponentComponent,
    EditCompanyComponentComponent,
    NotFoundComponentComponent,
    CompanyFormComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StarRatingModule.forRoot(),
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
