import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../servicios/storage.service";
import {ApiService} from "../servicios/api.service";

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
    constructor(
    	private storageService: StorageService,
    	private apiService: ApiService,
    	private router: Router
    ) {
   		this.user = {correo: "", pass:""};
    }
    ngOnInit() {}

    login(){
  		this.apiService.Auth0(this.user).subscribe(
  			d => {
  				console.log('is Login!!!');
  				this.correctLogin(d)   	
      		}, er =>{
            	console.log(er);
      			// this.message.status = true;
      			// this.message.msj = 'Acceso denegado. Usuario no encontrado';
      		}
      	);
  	}

  	private correctLogin(data: Session){
    	this.storageService.setCurrentSession(data);
    	this.router.navigate(['/dashboard']);
  	}
}
