import { Component, OnInit, Input, EventEmitter, Output, ComponentFactoryResolver } from '@angular/core';
import { Product } from '../../models/product.model';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
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

  total:number = 0;

  @Input() products:Product[] = this.productService.getProducts();

  @Output() totalCart = new EventEmitter();

  constructor(
    private storeService: StoreService,
    private productService: ProductService
  ) {
  }
  ngOnInit(): void {

  }
  onAddToShoppingCart(product:Product){
    this.storeService.addProduct(product);
    console.log(product);
    this.total = this.storeService.getTotal();
    console.log(this.total);
  }
}
