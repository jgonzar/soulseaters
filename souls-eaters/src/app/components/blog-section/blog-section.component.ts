import { Component, OnInit, Input } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Blogpost } from 'src/app/models/blog-post.model';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss']
})
export class BlogSectionComponent implements OnInit {

  faChevronRight = faChevronRight;

  blogposts:Blogpost[] = [
    {
      id:1,
      title:"Elden right it's amazing",
      img:'../../../assets/elden1.jpg',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime recusandae delectus deserunt debitis repellendus facilis ea, quibusdam facere! Consequuntur rem eveniet sequi voluptatibus? Veniam fugit impedit temporibus aperiam libero cum molestiae ut dolor commodi distinctio. Totam dolores eos quaerat blanditiis animi. Similique sed consequatur soluta, possimus excepturi quia vel pariatur perferendis obcaecati molestias animi dolor odio cupiditate cumque deleniti quos!',
      link:'/'
    },
    {
      id:2,
      title:"Elden right it's amazing",
      img:'../../../assets/elden2.jpg',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime recusandae delectus deserunt debitis repellendus facilis ea, quibusdam facere! Consequuntur rem eveniet sequi voluptatibus? Veniam fugit impedit temporibus aperiam libero cum molestiae ut dolor commodi distinctio. Totam dolores eos quaerat blanditiis animi. Similique sed consequatur soluta, possimus excepturi quia vel pariatur perferendis obcaecati molestias animi dolor odio cupiditate cumque deleniti quos!',
      link:'/'
    },
    {
      id:3,
      title:"Elden right it's amazing",
      img:'../../../assets/elden3.jpg',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime recusandae delectus deserunt debitis repellendus facilis ea, quibusdam facere! Consequuntur rem eveniet sequi voluptatibus? Veniam fugit impedit temporibus aperiam libero cum molestiae ut dolor commodi distinctio. Totam dolores eos quaerat blanditiis animi. Similique sed consequatur soluta, possimus excepturi quia vel pariatur perferendis obcaecati molestias animi dolor odio cupiditate cumque deleniti quos!',
      link:'/'
    }
];



  constructor() {

  }

  ngOnInit(): void {

  }

}
