import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFlagUsa } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  // Icons
  faShoppingCart = faShoppingCart;
  faUser = faUser;
  faFlagUsa = faFlagUsa;
  faCircleQuestion = faCircleQuestion;
  faPhoneFlip = faPhoneFlip;
  faChevronDown = faChevronDown;

  year = new Date().getFullYear();
  
  constructor() { }

  ngOnInit(): void {
  }

}
