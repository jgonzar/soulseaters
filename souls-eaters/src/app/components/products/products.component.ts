import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // icons
  faChevronRight = faChevronRight;

  products:Product[] = [{
    id:1,
    title:'Dark Souls',
    platform:'PS3',
    price:19.99,
    discount:0.8,
    img:'../../../assets/ds1.jpg',
    rating:5
  },
  {
    id:2,
    title:'Dark Souls 2',
    platform:'PS3',
    price:19.99,
    discount:0.8,
    img:'../../../assets/ds2.jpg',
    rating:4
  },
  {
    id:3,
    title:'Dark Souls 3',
    platform:'PS3',
    price:19.99,
    discount:0.8,
    img:'../../../assets/ds3.jpg',
    rating:5
  },
  {
    id:4,
    title:'Sekiro',
    platform:'PS4',
    price:19.99,
    discount:0.8,
    img:'../../../assets/sekiro-2.jpg',
    rating:5
  },
  {
    id:5,
    title:'Bloodborne',
    platform:'PS4',
    price:19.99,
    discount:0.8,
    img:'../../../assets/bloodborne-2.jpg',
    rating:5
  },
  {
    id:6,
    title:'Hollow Knight',
    platform:'Nintendo Switch',
    price:19.99,
    discount:0.8,
    img:'../../../assets/hollow.jpg',
    rating:5
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
