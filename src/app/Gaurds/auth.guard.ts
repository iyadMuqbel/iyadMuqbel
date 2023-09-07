import { CanActivateFn, Route, Router, UrlSegment } from '@angular/router';
import { UserAuthService } from '../user-auth.service';
import { UserLoginComponent } from '../user-login/user-login.component';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = new UserAuthService();
 
  if (authService.isUserLooged){
    return true;
  }else{
    alert("You must login first ....");
    inject(Router).navigate(['/userlogin']);
    return false;
  }
    
};
