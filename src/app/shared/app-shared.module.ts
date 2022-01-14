import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './components/header/app-header.component';
import { AppFooterComponent } from './components/footer/app-footer.component';
import { NgModule } from '@angular/core';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
@NgModule({
  imports: [RouterModule, NzBadgeModule, NzCardModule],
  declarations: [AppHeaderComponent, AppFooterComponent],
  exports: [AppHeaderComponent, AppFooterComponent],
})
export class AppSharedModule {}
