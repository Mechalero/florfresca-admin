import { Suscriptor } from './suscriptor';
import { Usuario } from './usuario';	
// import { Plan } from './plan';

class Plan  {
	_id:string;
	flor:string;
	img_flor:string;
	tamano:string;
	periodo:string;
	precio:number;
	payuId:string;
}

export class Subscripcion {
	f_entrega:string;
	f_creacion:string;
	_id:string;
	estado:string;
	suscriptor: Suscriptor;
	plan:Plan;
	cliente:Usuario;
	payuId:string;
	constructor(){
		this.plan = new Plan();
		this.cliente = new Usuario();
		this.suscriptor = new Suscriptor();
	}
}