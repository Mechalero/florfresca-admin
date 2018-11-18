import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { PayuService } from '../servicios/payu.service';
import { Alert } from '../core/models/alert';
import { Subscripcion } from '../core/models/subscription';

declare var $: any;

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  alert: Alert;
  subscripcion: Array<Subscripcion>;
  loading:boolean;
  delSubs:string;
  delSubsPayu:string;
  botonEnviar:boolean;
  constructor(
  	private apiService: ApiService,
    private payu: PayuService
  ){ 
  	this.alert = new Alert();
    this.subscripcion = new Array();
    this.loading = false;
    this.botonEnviar = false;
  }

  ngOnInit() {
  	this.apiService.subscriptions().subscribe(d=>{
      this.alert = {status :false , message:'', class:''};
      console.log(d)
      this.subscripcion = d;
    },e=>{
      this.alert = {status :true , message:'No se pudo obtener los usuarios de la API', class:'alert alert-danger'};
    });
  }
  confirm(id,payu){
    this.delSubs = id;
    this.delSubsPayu = payu;
  }

  delete(){
    this.loading = true;
    this.payu.delSubscription(this.delSubsPayu).subscribe(d=>{
      let query:any = {_id:this.delSubs, estado:"eliminado"};
      this.apiService.editSubs(query).subscribe(d=>{
        this.loading = false;
        $('#myModal').modal('hide');
        this.alert = {status :false , message:'Se ha realizado la cancelación de manera exitosa', class:'alert alert-success'};
      },e=>{
        this.loading = false;
        $('#myModal').modal('hide');
        this.alert = {status :true , message:'No se pudo Cancelar la susbcripción de la Base de datos', class:'alert alert-danger'};
      })
    },e=>{
      this.loading = false;
      $('#myModal').modal('hide');
      this.alert = {status :true , message:'No se pudo obtener cancelar suscripcion de payu latan', class:'alert alert-danger'};
    });
  }

  enviar(s:Subscripcion){
    this.botonEnviar = true;
    this.apiService.send(s).subscribe(d=>{
      this.alert = {status :true , message:'Se ha realizado el envio del correo exitosamente', class:'alert alert-success'};
      this.botonEnviar = false;
    },e=>{
      this.botonEnviar = false;
      this.alert = {status :true , message:'No se pudo enviar el correo al cliente seleccionado, llamar a soporte', class:'alert alert-danger'};
    });
  }

}
