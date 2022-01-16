import { addItemToCart, removeItemToCart } from './state/cart/cart.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  isMobile: boolean;

  constructor(
    private deviceService: DeviceDetectorService,
    private store: Store
  ) {
    this.isMobile = this.deviceService.isMobile();
  }
  ngOnInit(): void {
    this.store.dispatch(
      addItemToCart({
        cartItem: {
          id: '1',
          name: 'product 1',
          description: 'product dis',
          totalNumberItems: 1,
          price: 100,
          discount: 10,
          totalPrice: 100,
        },
      })
    );
    this.store.dispatch(
      addItemToCart({
        cartItem: {
          id: '1',
          name: 'product 1',
          description: 'product dis',
          totalNumberItems: 1,
          price: 100,
          discount: 10,
          totalPrice: 100,
        },
      })
    );

    this.store.dispatch(
      removeItemToCart({
        cartItem: {
          id: '1',
          name: 'product 1',
          description: 'product dis',
          totalNumberItems: 1,
          price: 100,
          discount: 10,
          totalPrice: 100,
        },
      })
    );

    this.store.dispatch(
      removeItemToCart({
        cartItem: {
          id: '1',
          name: 'product 1',
          description: 'product dis',
          totalNumberItems: 1,
          price: 100,
          discount: 10,
          totalPrice: 100,
        },
      })
    );
  }
}
