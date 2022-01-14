import { Component } from '@angular/core';

@Component({
  selector: 'app-home-dotd',
  templateUrl: './app-home-deal-of-the-day.component.html',
})
export class AppHomeDealOfTheDayComponent {
  cards = [
    {
      title: 'Wallpaper',
      description: 'Deal of the day',
      image: 'assets/images/dotd-product-1.svg',
      offerTitle: 'Min 50% + Extra 10%',
    },
    {
      title: 'Wallpaper 2',
      description: 'Deal of the day',
      image: 'assets/images/dotd-product-2.svg',
      offerTitle: 'Min 50% + Extra 10%',
    },
    {
      title: 'Wallpaper 3',
      description: 'Deal of the day',
      image: 'assets/images/dotd-product-3.svg',
      offerTitle: 'Min 50% + Extra 10%',
    },
    {
      title: 'Wallpaper 4',
      description: 'Deal of the day',
      offerTitle: 'Min 50% + Extra 10%',
      image: 'assets/images/dotd-product-4.svg',
    },
    {
      title: 'Wallpaper 5',
      description: 'Deal of the day',
      offerTitle: 'Min 50% + Extra 10%',
      image: 'assets/images/dotd-product-5.svg',
    },
  ];
}
