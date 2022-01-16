import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { AppProductCardComponent } from './components/product-card/app-product-card.component';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './components/header/app-header.component';
import { AppFooterComponent } from './components/footer/app-footer.component';
import { NgModule } from '@angular/core';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AppDealOfTheDayProductCardComponent } from './components/dotd-product-card/app-dotd-product-card.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NzBadgeModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
  ],
  declarations: [
    AppHeaderComponent,
    AppFooterComponent,
    AppDealOfTheDayProductCardComponent,
    AppProductCardComponent,
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent,
    AppDealOfTheDayProductCardComponent,
    AppProductCardComponent,
  ],
})
export class AppSharedModule {}
