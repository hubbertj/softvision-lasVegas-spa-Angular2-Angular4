//simple user
export class User {
    email: string;
    password: string;
    constructor() { 
    	this.email = '';
    	this.password = '';
  	};

  	public copyInto(obj: any){
  		console.log(obj);
  	};
}