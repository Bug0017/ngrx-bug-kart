import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './app-product-card.component.html',
})
export class AppProductCardComponent {
  @Input() card;
}
