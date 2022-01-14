import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dotd-product-card',
  templateUrl: './app-dotd-product-card.component.html',
})
export class AppDealOfTheDayProductCardComponent {
  @Input() card;
}
