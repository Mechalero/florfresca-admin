import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './blocks/footer/footer.component';
import { NavComponent } from './blocks/nav/nav.component';
import { SidebarComponent } from './blocks/sidebar/sidebar.component';
import { RoutingModule } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
