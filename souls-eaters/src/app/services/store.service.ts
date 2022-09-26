import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart:Product[] = [];

  private favProducts:Product[] = [];
  // private disPrice:number = 0;

  constructor() { }

  addProduct(product:Product){
    this.myShoppingCart.push(product);
  }

  addFav(product:Product){
    this.favProducts.push(product);
  }
  
  getTotal(){
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0 );
  }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getFavProducts(){
    return this.favProducts
  }
}
