import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { faMagnifyingGlass, faToiletPaperSlash } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // icons
  faMagnifyingGlass = faMagnifyingGlass;
  faShoppingCart = faShoppingCart;

  myShoppingCart:Product[] = [];

  product:Product[]=[]

  total:number = 0;
  
  constructor(
    private storeService:StoreService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
   }

  ngOnInit(): void {
    // this.actualPrice = this.product.price * this.product.discount;
  }
}
