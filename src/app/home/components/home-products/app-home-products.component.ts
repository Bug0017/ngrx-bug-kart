import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-products',
  templateUrl: './app-home-products.component.html',
})
export class AppHomeProductsComponent {
  @Input() products;
}
