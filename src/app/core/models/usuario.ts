class CreditCards{
            name: string;
            document: number;
            number: number;
            expMonth: number;
            expYear: number;
            type: string;
            // address: Address;
            // constructor(){
            //    this.address = new Address();
            // }
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
    tarjeta: Array<CreditCards>;
    constructor(){
        this.tarjeta = new Array();
    }

}