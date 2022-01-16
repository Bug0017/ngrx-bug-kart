import {
  originalPrice,
  getDiscountPrice,
  removeEmptyFromArray,
} from './../helpers/cart.helpers';
import { createReducer, on } from '@ngrx/store';
import { findItemIndexFromCart } from '../helpers/cart.helpers';
import * as CartActions from './cart.actions';
import { Cart } from './cart.interface';

const cartInitialState: Cart = {
  totalCartItemsCount: 0,
  totalCartPrice: 0,
  totalDiscount: 0,
  items: [],
};

export const cartReducer = createReducer(
  cartInitialState,
  on(CartActions.loadCartItems, (state, { cart }) => {
    return { ...state, ...cart, items: [...cart.items] };
  }),
  on(CartActions.addItemToCart, (state, { cartItem }) => {
    const cartIndex = findItemIndexFromCart(state, cartItem.id);

    if (cartIndex > -1) {
      const items = [...state.items];
      const selectedItem = items[cartIndex];
      const updatedItem = { ...selectedItem };
      updatedItem.totalNumberItems = selectedItem.totalNumberItems + 1;
      updatedItem.totalPrice =
        updatedItem.totalPrice +
        originalPrice(cartItem.price, cartItem.discount);

      delete items[cartIndex];

      return {
        ...state,
        items: removeEmptyFromArray([...items, { ...updatedItem }]),
        totalCartItemsCount: state.totalCartItemsCount + 1,
        totalCartPrice: state.totalCartPrice + updatedItem.totalPrice,
        totalDiscount:
          state.totalDiscount +
          getDiscountPrice(cartItem.price, cartItem.discount),
      };
    }

    return {
      ...state,
      items: [
        ...state.items,
        {
          ...cartItem,
          totalPrice: originalPrice(cartItem.price, cartItem.discount),
        },
      ],
      totalCartItemsCount: state.totalCartItemsCount + 1,
      totalCartPrice: state.totalCartPrice + cartItem.price,
      totalDiscount:
        state.totalDiscount +
        getDiscountPrice(cartItem.price, cartItem.discount),
    };
  }),
  on(CartActions.removeItemToCart, (state, { cartItem }) => {
    const cartIndex = findItemIndexFromCart(state, cartItem.id);

    const totalIsZero = state.totalCartItemsCount - 1;

    if (cartIndex > -1) {
      const items = [...state.items];
      const selectedItem = items[cartIndex];
      const updatedItem = { ...selectedItem };
      updatedItem.totalNumberItems = selectedItem.totalNumberItems - 1;
      updatedItem.totalPrice =
        updatedItem.totalPrice -
        originalPrice(cartItem.price, cartItem.discount);

      delete items[cartIndex];

      return {
        ...state,
        items: removeEmptyFromArray([...items, { ...updatedItem }]),
        totalCartItemsCount: state.totalCartItemsCount - 1,
        totalCartPrice: state.totalCartPrice + updatedItem.totalPrice,
        totalDiscount:
          state.totalDiscount -
          getDiscountPrice(cartItem.price, cartItem.discount),
      };
    }

    return {
      ...state,
      items: [
        ...state.items,
        {
          ...cartItem,
          totalPrice: originalPrice(cartItem.price, cartItem.discount),
        },
      ],
    };
  })
);
