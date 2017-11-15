import { Injectable } from '@angular/core';
import { User } from '../common/user.type';

//libs
import * as _ from 'underscore';
import { UUID } from 'angular2-uuid';

@Injectable()
export class UserService {

  constructor() { }

  public login(user: User){
  	return new Promise((resolve, reject) => {
  		let uuid = UUID.UUID();
  		localStorage.setItem('user', user.email);
  		localStorage.setItem('token', uuid);
  		if(localStorage.getItem('token')){
  			resolve(true);
  		}else{
  			reject('Something when wrong with login!');
  		} 
	});
  };
}
