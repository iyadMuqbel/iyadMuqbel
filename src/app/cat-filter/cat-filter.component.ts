import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from '../ViewModels/ICategory';
import { OrderComponent } from '../order/order.component';

@Component({
  selector: 'app-cat-filter',
  templateUrl: './cat-filter.component.html',
  styleUrls: ['./cat-filter.component.css']
})
export class CatFilterComponent implements AfterViewInit{

  // selectElement: ElementRef={} as ElementRef;
  // selectElement: ElementRef={} as ElementRef;
  // selectElement: ElementRef | undefined =undefined;
  // selectElement: ElementRef | null = null;
  // selectElement?: ElementRef; // optional
  // selectElement!: ElementRef; // non-naull asseration operator
  @ViewChild('selectElement') selectElementValue!: ElementRef;
  @ViewChild(OrderComponent) orderListComp!: OrderComponent;

  //productOfCategory: IProduct[] = [];
  category: ICategory[];
 
  idCat:number=0;
  orderDateNow: Date;
  constructor() {
    this.category = [
      { id: 1, name: 'Labtop' },
      { id: 2, name: 'Tablet' },
      { id: 3, name: 'Mobile' }
    ]
    //this.productOfCategory = this.product;
    this.orderDateNow = new Date();
    
  }
  ngAfterViewInit(): void {
    //this.idCat = 2;
    //alert(this.selectElementValue.nativeElement.value);
    this.selectElementValue.nativeElement.style.background="yellow";
    //this.selectElementValue.nativeElement.selected = 2;

    console.log(this.orderListComp.productOfCategory);
  }
newValueFromOrder:any;
  newTotalPrice(value:any){
    this.newValueFromOrder = value;
  } 

}
