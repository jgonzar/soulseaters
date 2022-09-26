import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {
  // Icons
  faArrowUp = faArrowUp;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  windowScrolled = false;

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }
}
