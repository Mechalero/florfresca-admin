import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './blocks/footer/footer.component';
import { NavComponent } from './blocks/nav/nav.component';
import { SidebarComponent } from './blocks/sidebar/sidebar.component';
import { RoutingModule } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { PlansComponent } from './plans/plans.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { EditComponent } from './subscriptions/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    UsersComponent,
    PlansComponent,
    SubscriptionsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
