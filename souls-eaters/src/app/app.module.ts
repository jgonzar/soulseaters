import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StickyNavModule } from 'ng2-sticky-nav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ImgComponent } from './components/img/img.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { WhatsnewComponent } from './components/whatsnew/whatsnew.component';
import { OnsaleComponent } from './components/onsale/onsale.component';
import { BlogSectionComponent } from './components/blog-section/blog-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialComponent } from './components/social/social.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ImgComponent,
    ProductsComponent,
    HeaderComponent,
    HeroComponent,
    CategoriesComponent,
    CategoryComponent,
    WhatsnewComponent,
    OnsaleComponent,
    BlogSectionComponent,
    FooterComponent,
    SocialComponent,
    SidemenuComponent,
    BackToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    StickyNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
