import { Component } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './app-home-carousel.component.html',
})
export class AppHomeCarouselComponent {
  images: Array<string> = [
    'https://images.unsplash.com/photo-1640516050694-590a128e69f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit',
    'https://images.unsplash.com/photo-1640516050694-590a128e69f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit',
  ];
  effect = 'scrollx';
}
