import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { ResultsComponent } from './results/results.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'events', component: EventsComponent },
    { path: 'results', component: ResultsComponent },
    { path: 'reviews', component: ReviewsComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' }
]

export const BTRRoutes = RouterModule.forRoot(appRoutes);