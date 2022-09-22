import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  faChevronRight = faChevronRight;

  categories:Category[] = [
    {
      id:1,
      title:'Soulsborne',
      link:'/'
    },
    {
      id:2,
      title:'Metroidvania',
      link:'/'
    },
    {
      id:3,
      title:'Pixel Art',
      link:'/'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
