import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
 

  isUserLogged = false;
  constructor(private authService:UserAuthService )
  {

  }
  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLooged;
  }
  login(){
    this.authService.login("UserName","Password");
    this.isUserLogged = this.authService.isUserLooged;
  }
  logout(){
    this.authService.logout();
    this.isUserLogged = this.authService.isUserLooged;
  }
}
