import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api.service';
import { Plan } from '../../core/models/plan';
import { Flower } from '../../core/models/flower';
import { Size } from '../../core/models/size';
import { Alert } from '../../core/models/alert';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {
	alert:Alert;
	plan:Plan;
	tamanos:Array<Size>;
	flores:Array<Flower>;
	periods:Array<string>;
  constructor(
  	private route: ActivatedRoute,
  	private apiService: ApiService
  	) {
  	this.alert = new Alert();
  	this.plan = new Plan();
  	this.tamanos = new Array();
  	this.flores = new Array();
  	this.periods = new Array();
  }

  ngOnInit() {
  	this.loadFlower();
  	this.loadTamanos();
  	this.loadPeriod();
  }

  loadFlower(){
  	this.apiService.flowers().subscribe(f=>{
  		this.flores = f;
  		console.log(f)
  	},e=>{
  		console.log(e);
  	});
  }
  loadTamanos(){
  	this.apiService.sizes().subscribe(s=>{
  		this.tamanos = s;
  		console.log(s);
  	},e=>{
  		console.log(e);
  	})
  }
  loadPeriod(){
  	this.periods = [
  		"SEMANAL",
  		"QUINCENAL",
  		"MENSUAL"
  	]
  }

  agregar(){
  	this.apiService.addPlan(this.plan).subscribe(d=>{
  		console.log(d);
  	},e=>{
  		console.log(e);
  	})
  }

}
