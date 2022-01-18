import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectHome = createFeatureSelector('home');

export const selectNormalProduct = createSelector(
  selectHome,
  (state: any) => state.normalProducts
);

export const selectDOTDProduct = createSelector(
  selectHome,
  (state: any) => state.dealOfTheDayProducts
);
