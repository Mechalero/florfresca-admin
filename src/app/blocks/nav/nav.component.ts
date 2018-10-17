import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../servicios/storage.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
  	private storageService: StorageService
  	) { }

  ngOnInit() {
  }

  logout(){
  	this.storageService.logout();
  }

}
