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
  loading:boolean;
  constructor(
  	private route: ActivatedRoute,
  	private apiService: ApiService
  	) {
  	this.alert = new Alert();
  	this.plan = new Plan();
  	this.tamanos = new Array();
  	this.flores = new Array();
  	this.periods = new Array();
    this.loading = false;
  }

  ngOnInit() {
  	const id = this.route.snapshot.paramMap.get('id');
  	this.apiService.plan(id).subscribe(p=>{
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
    this.loading = true;
  	this.apiService.editPlan(this.plan).subscribe(d=>{
  		this.alert = {status :true , message:'Se ha actualizado los datos del plan exitosamente', class:'alert alert-success'};
      this.loading = false;
  	},e=>{
      let er:any=e;
      this.loading = false;
  		this.alert = {status :true , message:(er.message)?er.message:'No se pudo conectar con la API', class:'alert alert-danger'};
  	})
  }

}
