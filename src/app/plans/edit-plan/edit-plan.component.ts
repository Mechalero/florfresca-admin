import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api.service';
import { Plan } from '../../core/models/plan';
import { Flower } from '../../core/models/flower';
import { Size } from '../../core/models/size';
import { Alert } from '../../core/models/alert';

@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrls: ['./edit-plan.component.css']
})
export class EditPlanComponent implements OnInit {
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
  	const id = this.route.snapshot.paramMap.get('id');
  	this.apiService.plan(id).subscribe(p=>{
  		console.log(p);
  		this.plan = p;
  		this.loadFlower();
  		this.loadTamanos();
  		this.loadPeriod();
  	},e=>{

  	})
  }

  loadFlower(){
  	this.apiService.flowers().subscribe(f=>{
  		this.flores = f;
  	},e=>{
  		console.log(e);
  	});
  }
  loadTamanos(){
  	this.apiService.sizes().subscribe(s=>{
  		this.tamanos = s;
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

  editar(){
  	console.log(this.plan);
  	this.apiService.editPlan(this.plan).subscribe(d=>{
  		console.log(d);
  	},e=>{
  		console.log(e);
  	})
  }

}
