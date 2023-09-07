import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromoationService {
  private adsList: string[];

constructor() { 
  this.adsList=[
    "Big Discount",
    "Sale Up To 50%",
    "Check Our White Friday Offers",
    "",
    "Special White Friday Offer Up To 70%"
  ]
}
getScheduleAds(intervalInSecond:number):Observable<string>{
  return new Observable <string> (
    (Observable)=>{
      let counter = 0;
      let adsTimer = setInterval(
        ()=>{
          console.log('on Interval');
          if(counter==this.adsList.length){
            Observable.complete();
          }
          if(this.adsList[counter] == ""){
            Observable.error("Error Empty Ads.");
          }
          Observable.next(this.adsList[counter]);
          counter++;

        },intervalInSecond*1000);
        return {
          unsubscribe(){
            clearInterval(adsTimer);
            console.log('Unsbscribe');
          }
        }
    }
  )
}
getSerialAdv() 
{
  //return toSignal<string>(this.adsList);
}
}
