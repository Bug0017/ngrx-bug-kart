import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './components/header/app-header.component';
import { AppFooterComponent } from './components/footer/app-footer.component';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [RouterModule],
  declarations: [AppHeaderComponent, AppFooterComponent],
  exports: [AppHeaderComponent, AppFooterComponent],
})
export class AppSharedModule {}
