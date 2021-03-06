import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { Plan } from '../core/models/plan';
import { Alert } from '../core/models/alert';


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
	alert:Alert;
	plans:Array<Plan>;

  constructor(
  	private apiService: ApiService
  ) {
  	this.alert = new Alert();
  	this.plans = new Array();
  }

  ngOnInit() {
  	this.apiService.plans().subscribe(d=>{
  		this.alert = {status :false , message:'', class:''};
  		this.plans=d;
  	},e=>{
      let er:any = e;
  		this.alert = {status :true , message:(e.error.message)?e.error.message: 'No se pudo obtener los usuarios de la API', class:'alert alert-warning'};
  	})
  }

}
