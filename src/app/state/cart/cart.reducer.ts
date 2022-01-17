import { originalPrice, getDiscountPrice } from './../helpers/cart.helpers';
import { createReducer, on } from '@ngrx/store';
import { findItemIndexFromCart } from '../helpers/cart.helpers';
import * as CartActions from './cart.actions';
import { Cart } from './cart.interface';
import { removeEmptyFromArray } from '../helpers';

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
        totalCartPrice:
          state.totalCartPrice +
          originalPrice(updatedItem.price, updatedItem.discount),
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
      totalCartPrice:
        state.totalCartPrice + originalPrice(cartItem.price, cartItem.discount),
      totalDiscount:
        state.totalDiscount +
        getDiscountPrice(cartItem.price, cartItem.discount),
    };
  }),
  on(CartActions.removeItemToCart, (state, { cartItem }) => {
    const cartIndex = findItemIndexFromCart(state, cartItem.id);
    console.log(cartIndex);
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
        items:
          totalIsZero <= 0
            ? []
            : removeEmptyFromArray([...items, { ...updatedItem }]),
        totalCartItemsCount:
          totalIsZero <= 0 ? 0 : state.totalCartItemsCount - 1,
        totalCartPrice:
          totalIsZero <= 0
            ? 0
            : state.totalCartPrice -
              originalPrice(updatedItem.price, updatedItem.discount),
        totalDiscount:
          totalIsZero <= 0
            ? 0
            : state.totalDiscount -
              getDiscountPrice(cartItem.price, cartItem.discount),
      };
    }
    return {
      ...state,
      items: [...state.items],
    };
  })
);
