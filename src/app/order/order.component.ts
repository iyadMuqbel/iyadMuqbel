import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../ViewModels/IProduct';
import { ICategory } from '../ViewModels/ICategory';
import { StatickPorductsService } from '../Services/StatickPorducts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnChanges{
  
  productOfCategory: IProduct[] ;
  @Input() lisenCatId: any;
  @Output() public outputTotalPriceEvent = new EventEmitter<number>();
  newTotalPrice(quatityBuy:any,priceItem:number){
    debugger;
    this.totalPriceValue += Number(quatityBuy) * priceItem;
    this.outputTotalPriceEvent.emit(this.totalPriceValue);

  }
  itemQuantityStyle(q:number):boolean{
    if(q>0)
      return true;
    else
      return false; 
  }
  totalPriceValue:number=0;

  
constructor(private StatickPorsServ:StatickPorductsService,private router:Router){
  this.productOfCategory=StatickPorsServ.getAllProducts();
  //this.productOfCategory = this.product;
  //this.FilterCat();
}
  ngOnChanges(): void {
    if (this.lisenCatId == 0)
      this.productOfCategory = this.StatickPorsServ.getAllProducts();
    else
      this.productOfCategory = this.StatickPorsServ.getProductByCatId(this.lisenCatId);
    //alert(this.lisenCatId);
  }
  OpenDetails(prodId:number){
    this.router.navigate(['/product',prodId]);
    //this.router.ByUrl('/product/'+prodId);

  }

}
