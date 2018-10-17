import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { LoginComponent }   from './login/login.component';
import { PlansComponent }   from './plans/plans.component';
import { UsersComponent }   from './users/users.component';
import { EditUserComponent }   from './users/edit-user/edit-user.component';
import { SubscriptionsComponent }   from './subscriptions/subscriptions.component';
import { EditComponent }   from './subscriptions/edit/edit.component';

import {AuthService} from "./servicios/auth.service";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthService]},
  { path: 'users', component: UsersComponent, canActivate:[AuthService]},
  { path: 'users/:id', component: EditUserComponent, canActivate:[AuthService]},
  { path: 'plans', component: PlansComponent, canActivate:[AuthService] },
  { path: 'plans/:id', component: PlansComponent, canActivate:[AuthService] },
  { path: 'subscriptions', component: SubscriptionsComponent, canActivate:[AuthService] },
  { path: 'subscriptions/:id', component: EditComponent, canActivate:[AuthService] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AuthService ]
})
export class RoutingModule { }
