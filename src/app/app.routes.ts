import { Routes } from '@angular/router';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';

export const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'sub', component: SubscriptionComponent},
  {path:'setting',component:SettingComponent}
];
