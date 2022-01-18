import { Product } from './../product/product.interface';
import { HomeActionTypes } from './home.action-types.enum';
import { createAction, props } from '@ngrx/store';

export const homeEnter = createAction(HomeActionTypes.HOME_ENTER);
export const loadNormalProducts = createAction(
  HomeActionTypes.LOAD_NORMAL_PRODUCTS,
  props<{ products: Product[] }>()
);

export const loadDealOfTheDayProducts = createAction(
  HomeActionTypes.LOAD_DEAL_OF_THE_DAY_PRODUCTS,
  props<{ products: Product[] }>()
);
