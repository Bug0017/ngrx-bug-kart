import { selectTotalCartItemsCount } from './../../../state/cart/cart.selectors';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
})
export class AppHeaderComponent {
  count$;

  constructor(private store: Store) {
    this.count$ = store.select(selectTotalCartItemsCount);
  }
}
