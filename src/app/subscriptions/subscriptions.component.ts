import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { Alert } from '../core/models/alert';


@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  alert: Alert;
  constructor(
  	private apiService: ApiService
  ) { 
  	this.alert = new Alert();
  }

  ngOnInit() {
  	this.apiService.subscriptions().subscribe(d=>{console.log(d)},e=>{});
  }

}
