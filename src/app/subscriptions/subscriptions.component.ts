import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { Alert } from '../core/models/alert';
import { Subscripcion } from '../core/models/subscription';


@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  alert: Alert;
  subscripcion: Array<Subscripcion>;
  constructor(
  	private apiService: ApiService
  ) { 
  	this.alert = new Alert();
    this.subscripcion = new Array();
  }

  ngOnInit() {
  	this.apiService.subscriptions().subscribe(d=>{this.subscripcion = d;},e=>{});
  }

}
