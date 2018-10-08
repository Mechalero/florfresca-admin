class Flower  {
	_id:string;
	nombre:string;
    desc: string;
    img: string;
}

class  Size {
	 _id: string;
    nombre: string;
}

export class Plan {
	flower:Flower;
    size:Size;
    period: string;
    payuId: string;
    values: number;
    iva:string;
    f_creacion:  string;
    f_upd: string;
    constructor(){
    	this.flower = new Flower();
    	this.size = new Size();
    }
}
