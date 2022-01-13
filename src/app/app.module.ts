import { NgModule } from '@angular/core';
import { AppSharedModule } from './shared/app-shared.module';
import { AppStateModule } from './app-state.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AppStateModule, AppSharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
