import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsnewComponent } from './whatsnew.component';

describe('WhatsnewComponent', () => {
  let component: WhatsnewComponent;
  let fixture: ComponentFixture<WhatsnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
