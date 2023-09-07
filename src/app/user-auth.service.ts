import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isLoogedSubject:BehaviorSubject<boolean>;
  constructor() {
    this.isLoogedSubject = new BehaviorSubject<boolean> (this.isUserLooged);
   }
  login(userName:string,password:string){
    
    let userToken='123456789'
    localStorage.setItem('token',userToken);
    this.isLoogedSubject.next(true);

  }
  logout(){
    localStorage.removeItem("token");
    this.isLoogedSubject.next(false);

  }
  get isUserLooged():boolean{
    return (localStorage.getItem("token")) ? true : false;
  }
  getLoggedStatus():Observable<boolean>{
    return this.isLoogedSubject.asObservable();
  }
}
