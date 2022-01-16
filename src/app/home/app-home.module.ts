import { AppHomeProductsComponent } from './components/home-products/app-home-products.component';
import { AppSharedModule } from './../shared/app-shared.module';
import { AppHomeDealOfTheDayComponent } from './components/home-deal-of-the-day/app-home-deal-of-the-day.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { AppHomeRoutingModule } from './app-home-routing.module';
import { AppHomeCarouselComponent } from './components/home-carousel/app-home-carousel.component';
import { AppHomePageComponent } from './components/home-page/app-home-page.component';
@NgModule({
  imports: [
    CommonModule,
    AppHomeRoutingModule,
    NzCarouselModule,
    NzButtonModule,
    AppSharedModule,
  ],
  declarations: [
    AppHomePageComponent,
    AppHomeCarouselComponent,
    AppHomeDealOfTheDayComponent,
    AppHomeProductsComponent,
  ],
  providers: [],
  exports: [],
})
export class AppHomeModule {}
