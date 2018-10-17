import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../servicios/storage.service";
import {ApiService} from "../servicios/api.service";
import { Alert } from '../core/models/alert';

export class Session {
  public token: string;
  public id: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
	user:any;
  alert:Alert;
    constructor(
    	private storageService: StorageService,
    	private apiService: ApiService,
    	private router: Router
    ) {
   		this.user = {correo: "", pass:""};
      this.alert = new Alert();
    }
    ngOnInit() {}

    login(){
  		this.apiService.Auth0(this.user).subscribe(
  			d => {
          this.alert = {status :false , message:'', class:''};
  				console.log('is Login!!!');
  				this.correctLogin(d)   	
      		}, er =>{
            let e:any = er;
      			this.alert = {status :true , message:(e.error.message)?e.error.message:'Lo sentimos concexión rechazada, no se pudo conectar a la API', class:'alert alert-danger'};
      		}
      	);
  	}

  	private correctLogin(data: Session){
    	this.storageService.setCurrentSession(data);
    	this.router.navigate(['/dashboard']);
  	}
}
