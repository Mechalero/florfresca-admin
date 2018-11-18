export class CreditCards{
   token: string;
   customerId: string;
   number: string;
   type: string;
   name: string;
   document: string;
   address: {
      line1: string;
      line2: string;
      line3: string;
      city: string;
      state: string;
      country: string;
      phone: number
   }
}

export class Usuario {
    _id?:string;
    nombre?: string;
    apellido?: string;
    correo: string;
    telefono?: string;
    celular?: number;
    tipo_doc?: string;
    documento?:  number;
    pass?:string;
    dir?:string;
    payuId?:string;
    creado:string;
    activo:string;
    tarjeta: Array<CreditCards>;
    constructor(){
        this.tarjeta = new Array();
    }

}