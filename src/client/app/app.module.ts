import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BTRRoutes } from './app.routing';

import { EventsComponent } from './events/events.component';
import { HeaderComponent } from './header/header.component';
import { ResultsComponent } from './results/results.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HeaderComponent,
    ResultsComponent,
    ReviewsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BTRRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
