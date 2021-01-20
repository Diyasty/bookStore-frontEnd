import { SharedModule } from './../shared/shared.module';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { FlashSaleComponent } from './components/flash-sale/flash-sale.component';
import { SaleItemsComponent } from './components/sale-items/sale-items.component';
import { FeaturedBooksComponent } from './components/featured-books/featured-books.component';
import { NewsComponent } from './components/news/news.component';

import { CarouselModule } from 'ngx-owl-carousel-o';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
  },
];
@NgModule({
  declarations: [
    HeaderSectionComponent,
    BaseComponent,
    FlashSaleComponent,
    FeaturedBooksComponent,
    NewsComponent,
  ],
  imports: [
    CarouselModule,
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class HomeModule {}
