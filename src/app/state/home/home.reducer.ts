import { createReducer, on } from '@ngrx/store';
export const homeInitialState = {
  normalProducts: [],
  dealOfTheDayProducts: [],
};

import * as HomeActions from './home.actions';

export const homeReducer = createReducer(
  homeInitialState,
  on(HomeActions.homeEnter, (state) => ({ ...state })),
  on(HomeActions.loadDealOfTheDayProducts, (state, { products }) => {
    return { ...state, dealOfTheDayProducts: [...products] };
  }),
  on(HomeActions.loadNormalProducts, (state, { products }) => ({
    ...state,
    normalProducts: [...products],
  }))
);
