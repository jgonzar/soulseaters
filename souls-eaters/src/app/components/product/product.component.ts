import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';
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

  // product module
    @Input() product:Product = {
      id:0,
      title:'',
      price:0,
      platform:'',
      discount:0,
      img:'',
      rating:0
    }

    actualPrice:number = 0;

  constructor() { }

  ngOnInit(): void {
     // price calculation
      this.actualPrice = this.product.price * this.product.discount;
  }

}
