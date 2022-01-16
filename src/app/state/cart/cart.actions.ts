import { Cart, CartItem } from './cart.interface';
import { createAction, props } from '@ngrx/store';
import { CartActionTypes } from './cart.action-types.enum';

export const loadCartItems = createAction(
  CartActionTypes.LOAD_CART_ITEMS,
  props<{ cart: Cart }>()
);
export const addItemToCart = createAction(
  CartActionTypes.ADD_ITEM_TO_CART,
  props<{ cartItem: CartItem }>()
);

export const removeItemToCart = createAction(
  CartActionTypes.REMOVE_ITEM_TO_CART,
  props<{ cartItem: CartItem }>()
);
