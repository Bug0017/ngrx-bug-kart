import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-dotd',
  templateUrl: './app-home-deal-of-the-day.component.html',
})
export class AppHomeDealOfTheDayComponent {
  @Input() products;
}
