import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Cart } from './cart.interface';

export const selectCart = createFeatureSelector<Cart>('cart');

export const selectTotalCartItemsCount = createSelector(
  selectCart,
  (cart) => cart.totalCartItemsCount
);
