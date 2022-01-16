export const findItemIndexFromCart = (cart, itemId) => {
  return cart.items.findIndex(({ id }) => id === itemId);
};

export const originalPrice = (amount, discount) => {
  return amount - amount * (discount / 100);
};

export const getDiscountPrice = (amount, discount) => {
  return amount * (discount / 100);
};
