import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductComponent } from '../product/product.component';



@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img:string = '';
  @Output() loaded = new EventEmitter<string>();

  defaultImg:string = '../../../assets/default-image.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    this.img= this.defaultImg
  }

  imgLoaded(){
    console.log('loaded');
    this.loaded.emit(this.img);
  }
}
