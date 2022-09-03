import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() category: Category = {
    id:0,
    title:''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
