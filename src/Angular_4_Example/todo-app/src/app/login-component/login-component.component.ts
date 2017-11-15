import { Component, OnInit } from '@angular/core';
import { User } from '../common/user.type';
import { UserService } from '../services/user.service';
import { Router} from '@angular/router';

//everything gets defined in here from directives to providers
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  providers: [UserService]
})

export class LoginComponentComponent implements OnInit {
	private user: User;

  constructor(private userService: UserService, private router: Router) { 
  };

  ngOnInit() {
  	this.user = new User();
  	console.log("login page init");
  };

  private onLogin(){
  	this.userService.login(this.user)
  	.then((didLogin) => {
  		if(didLogin){
  			this.router.navigateByUrl('/list');
  		}
  	});
  };

}
