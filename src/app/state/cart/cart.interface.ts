export interface Cart {
  totalCartItemsCount: number;
  totalCartPrice: number;
  totalDiscount: number;
  items: CartItem[];
}

export interface CartItem {
  id: string;
  name: string;
  description: string;
  totalNumberItems: number;
  price: number;
  discount: number;
  totalPrice: number;
}
