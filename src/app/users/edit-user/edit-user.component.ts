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

  constructor(
  	private route: ActivatedRoute,
  	private apiService: ApiService
  	) {
  	this.alert = new Alert();
  	this.usuario = new Usuario();
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

}
