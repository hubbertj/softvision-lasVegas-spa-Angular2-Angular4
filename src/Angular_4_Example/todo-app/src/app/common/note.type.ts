//note
export class Note {
	id: number;
    name: string;
    text: string;
    constructor() { 
    	this.id = null;
    	this.name = '';
    	this.text = '';
  	};

  	public copyInto(obj: any){
  		if(obj.hasOwnProperty('id')){
  			this.id = obj.id;
  		}
  		if(obj.hasOwnProperty('name')){
  			this.name = obj.name;
  		}
  		if(obj.hasOwnProperty('text')){
  			this.text = obj.text;
  		}
  	};
}