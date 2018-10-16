import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { Alert } from '../core/models/alert';
import { Usuario } from '../core/models/usuario';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	alert:Alert;
	usuarios: Array<Usuario>;
  constructor(
  	private apiService: ApiService
  	) {
  	this.alert = new Alert();
  	this.usuarios = new Array();
  }

  ngOnInit() {
  	this.apiService.users().subscribe(d=>{
      this.alert = {status :false , message:'', class:''};
      this.usuarios = d;
    },e=>{
      this.alert = {status :true , message:'No se pudo obtener los usuarios de la API', class:'alert alert-danger'};
    });
  }

}
