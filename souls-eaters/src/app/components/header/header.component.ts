import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sidemenuToggler:boolean = false;
  @Output() clicked = new EventEmitter<boolean>();
  // icons
  faMagnifyingGlass = faMagnifyingGlass;

  // toggle
 

  constructor() { }

  ngOnInit(): void {

  }

}
