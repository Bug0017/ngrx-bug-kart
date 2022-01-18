import { HomePageEffects } from './state/home/home.effects';
import { homeReducer } from './state/home/home.reducer';
import { cartReducer } from './state/cart/cart.reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';
@NgModule({
  imports: [
    StoreModule.forRoot({
      router: routerReducer,
      cart: cartReducer,
      home: homeReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([HomePageEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
})
export class AppStateModule {}
