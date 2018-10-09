import { Component, OnInit } from '@angular/core';
import { Alert } from '../core/models/alert';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	alert:Alert;
  constructor() {
  	this.alert = new Alert();
  }

  ngOnInit() {
  }

}
