import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../ViewModels/IProduct';
import { StatickPorductsService } from '../Services/StatickPorducts.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-DetailsProduct',
  templateUrl: './DetailsProduct.component.html',
  styleUrls: ['./DetailsProduct.component.css']
})
export class DetailsProductComponent implements OnInit {
currentProductId:number=0;
prd:IProduct|null=null;

  constructor(private activeroute: ActivatedRoute,private staticserv: StatickPorductsService,
    private location:Location) { 
    this.currentProductId = Number(this.activeroute.snapshot.paramMap.get('pid'));
    
    this.prd = this.staticserv.getProductById(this.currentProductId);
  }

  ngOnInit() {
   
  }
  backPage(){
    this.location.back();
  }

}
