import { Routes } from '@angular/router';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'sub', component: SubscriptionComponent}
];
