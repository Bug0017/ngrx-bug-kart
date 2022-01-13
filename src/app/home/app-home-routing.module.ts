import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppHomePageComponent } from './components/home-page/app-home-page.component';

const routes: Routes = [{ path: 'home', component: AppHomePageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppHomeRoutingModule {}
