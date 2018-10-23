import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api.service';
import { Alert } from '../../core/models/alert';
import { Usuario } from '../../core/models/usuario';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
	alert:Alert;
	usuario:Usuario;
  tipo:Array<any>;
  disable:boolean;
  constructor(
  	private route: ActivatedRoute,
  	private apiService: ApiService
  	) {
  	this.alert = new Alert();
  	this.usuario = new Usuario();
    this.tipo = [
    {iso:"CC", desc:"Cédula de ciudadanía"},
    {iso:"CE", desc:"Cédula de extranjería"},
    {iso:"NIT", desc:"Número de Identificación Tributario."},
    {iso:"TI", desc:"Cédula de ciudadanía"},
    {iso:"PP", desc:"Pasaporte"},
    {iso:"RC", desc:"Registro civil de nacimiento"},
    {iso:"DE", desc:"Documento de identificación extranjero"}
    ];
    this.disable = false;
  }

  ngOnInit() {
  	const id = this.route.snapshot.paramMap.get('id');
  	this.apiService.user(id).subscribe(d=>{
      this.alert = {status :false , message:'', class:''};
      this.usuario = d;
    },e=>{
    	console.log(e);
      this.alert = {status :true , message:'No se pudo obtener los usuarios de la API', class:'alert alert-danger'};
    });
  }

  Editar(){
    this.disable = true;
    this.apiService.editUser(this.usuario).subscribe(d=>{
      this.alert = {status :true , message:'Se ha actualizado el usuario Correctamente', class:'alert alert-success'};
      this.disable = false;
      console.log("success!!!");
    },e=>{
      this.disable = false;
      console.log(e);
      this.alert = {status :true , message:'No se pudo obtener los usuarios de la API', class:'alert alert-danger'};
    });
  }

}
