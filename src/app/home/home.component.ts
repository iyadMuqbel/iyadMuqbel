import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreData } from '../ViewModels/store-data';
import { PromoationService } from '../Promoation/Promoation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit,OnDestroy{
private subscripation!: Subscription;
storeinfo: StoreData;
isShowImage: boolean = true;

clickImageButton(){
  this.isShowImage = !this.isShowImage;
}

constructor(private promoAds:PromoationService){
  this.storeinfo = new StoreData ('Iyad Muqbel','https://picsum.photos/800/300',['one','tow','Three']);
}
  ngOnDestroy(): void {
    this.subscripation.unsubscribe();    
  }
  ngOnInit(): void {
   
    this.subscripation = this.promoAds.getScheduleAds(3).subscribe({
      
      next:(data:string)=>{
        console.log(data);
      },
      error:(err:string)=>{
        console.log(err)
      },
      complete:()=>{
        console.log("Ads Finished!")
      }
    });
  }
}
