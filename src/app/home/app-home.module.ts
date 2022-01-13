import { AppHomePageComponent } from './components/home-page/app-home-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppHomeRoutingModule } from './app-home-routing.module';
import { AppHomeCarouselComponent } from './components/home-carousel/app-home-carousel.component';
@NgModule({
  imports: [CommonModule, AppHomeRoutingModule],
  declarations: [AppHomePageComponent, AppHomeCarouselComponent],
  providers: [],
  exports: [],
})
export class AppHomeModule {}
