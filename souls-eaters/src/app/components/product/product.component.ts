import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // Icons
  faStar = faStar;
  faShoppingCart = faShoppingCart;
  faHeart = faHeart;

  disPrice:number = 0;

  // product module
  @Input() product: Product = this.productService.getDefaultProduct();

  @Output() addedProduct = new EventEmitter<Product>();

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {
     //  price calculation
    this.disPrice = this.product.price * this.product.discount;
  }

  onAddToCart(){
    this.addedProduct.emit(this.product);
  }
}
