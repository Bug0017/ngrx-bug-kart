import { Component } from '@angular/core';

@Component({
  selector: 'app-home-products',
  templateUrl: './app-home-products.component.html',
})
export class AppHomeProductsComponent {
  cards = [
    {
      title: 'Wallpaper',
      image: 'assets/images/dotd-product-1.svg',
      rating: 4.2,
      price: 299,
    },
    {
      title: 'Wallpaper 2',
      image: 'assets/images/dotd-product-2.svg',
      rating: 4.7,
      price: 599,
    },
    {
      title: 'Wallpaper 3',
      image: 'assets/images/dotd-product-3.svg',
      rating: 4.2,
      price: 299,
    },
    {
      title: 'Wallpaper 4',
      image: 'assets/images/dotd-product-4.svg',
      rating: 4.5,
      price: 199,
    },
    {
      title: 'Wallpaper 5',
      image: 'assets/images/dotd-product-5.svg',
      rating: 4.3,
      price: 239,
    },
  ];
}
