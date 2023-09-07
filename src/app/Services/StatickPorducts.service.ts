import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/IProduct';

@Injectable({
  providedIn: 'root'
})

export class StatickPorductsService {

product: IProduct[];
  
constructor() { 
  this.product =  [
    {id:30,name:'labtop lenovoThinkPad',imageURL:'https://picsum.photos/200/100',Quantity:30,Price:300,CategoryId:1},
    {id:40,name:'labtop IBM',imageURL:'https://picsum.photos/200/100',Quantity:0,Price:500,CategoryId:1},
    {id:50,name:'Tablet tab3',imageURL:'https://picsum.photos/200/100',Quantity:10,Price:700,CategoryId:2},
    {id:60,name:'Tablet tab1',imageURL:'https://picsum.photos/200/100',Quantity:2,Price:600,CategoryId:2},
    {id:70,name:'Mobile Apple 7s',imageURL:'https://picsum.photos/200/100',Quantity:3,Price:800,CategoryId:3},
    {id:80,name:'Mobile Samsung 14',imageURL:'https://picsum.photos/200/100',Quantity:1,Price:900,CategoryId:3}
  ];
  
}

getAllProducts():IProduct[]{
  return this.product;
}
getProductByCatId(catId:number):IProduct[]{
  return this.product.filter(f => f.CategoryId == catId)
}
getProductById(prdId:number):IProduct |null
{
  let foundItem = this.product.find(prd => prd.id == prdId);
  return foundItem ? foundItem : null
}
}
