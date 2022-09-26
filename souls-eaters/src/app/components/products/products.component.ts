import { Component, OnInit, Input, EventEmitter, Output, ComponentFactoryResolver } from '@angular/core';
import { Product } from '../../models/product.model';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { StoreService } from 'src/app/services/store.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // icons
  faChevronRight = faChevronRight;
  faShoppingCart = faShoppingCart;

  @Input() products:Product[] = this.productService.getProducts();

  @Input() shoppingCart:Product[] = this.storeService.getShoppingCart();

  @Input() favProducts:Product[] = this.storeService.getFavProducts();

  total:number = 0;

  constructor(
    private storeService: StoreService,
    private productService: ProductService
  ) {
  }
  ngOnInit(): void {

  }
  onAddToShoppingCart(product:Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
    console.log(this.shoppingCart);
  }

  onAddToFavorite(product:Product){
    this.storeService.addFav(product);
    console.log(this.favProducts);
  }
}
