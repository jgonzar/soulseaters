import { Component, OnInit } from '@angular/core';
import { CarouselGame } from 'src/app/models/herogame.model';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  // icons
  // faChevronRight = faChevronRight;

  items:CarouselGame[] = [
    {
      id:1,
      title:'Blasphemous',
      img:'../../../assets/blasphemous.jpg'

    },
    {
      id:2,
      title:'Hollow Knight',
      img:'../../../assets/hollow-2.jpg'
    },
    {
      id:3,
      title:'Hotline Miami',
      img:'../../../assets/hotline.jpg'

    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
