import { homeEnter } from './../../../state/home/home.actions';
import {
  selectNormalProduct,
  selectDOTDProduct,
} from './../../../state/home/home.selectors';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './app-home-page.component.html',
})
export class AppHomePageComponent implements OnInit {
  dealOfTheDayProducts$ = this.store.select(selectNormalProduct);
  normalProducts$ = this.store.select(selectDOTDProduct);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(homeEnter());
  }
}
