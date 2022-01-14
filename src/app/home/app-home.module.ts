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
  ],
  declarations: [
    AppHomePageComponent,
    AppHomeCarouselComponent,
    AppHomeDealOfTheDayComponent,
  ],
  providers: [],
  exports: [],
})
export class AppHomeModule {}
