import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './components/header/app-header.component';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [RouterModule],
  declarations: [AppHeaderComponent],
  exports: [AppHeaderComponent],
})
export class AppSharedModule {}
