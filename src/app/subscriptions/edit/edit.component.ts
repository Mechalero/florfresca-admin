import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api.service';
import { Alert } from '../../core/models/alert';
import { Subscripcion } from '../../core/models/subscription';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  alert: Alert;
  subscripcion: Subscripcion;

  constructor(
  	private route: ActivatedRoute,
  	private apiService: ApiService
  	) {
  	this.alert = new Alert();
    this.subscripcion = new Subscripcion();
  }

  ngOnInit() {
  	this.load();
  }

  load(){
  	const id = this.route.snapshot.paramMap.get('id');
    this.apiService.subscription(id).subscribe(s =>{
    	this.alert = {status :false , message:'', class:''};
        this.subscripcion = s;
      },e=>{
      	this.alert = {status :true , message:'No se pudo obtener los usuarios de la API', class:'alert alert-danger'};
      }
    );
  }
  estado(){
    this.apiService.editSubs(this.subscripcion).subscribe(s =>{
        this.alert = {status :true , message:'Se ha actualizado el estado de la suscripción exitosamente', class:'alert alert-success'};
      },e=>{
        this.alert = {status :true , message:'No se pudo obtener los usuarios de la API', class:'alert alert-danger'};
      }
    );
  }

  editar(){
    this.apiService.editSubs(this.subscripcion).subscribe(s =>{
        this.alert = {status :true , message:'Se ha actualizado los datos de la suscripción exitosamente', class:'alert alert-success'};
      },e=>{
        this.alert = {status :true , message:'No se pudo obtener los usuarios de la API', class:'alert alert-danger'};
      }
    );
  }
}
