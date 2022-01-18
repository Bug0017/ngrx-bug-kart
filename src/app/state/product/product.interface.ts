export enum DealOfTheDay {
  YES = 'YES',
  NO = 'NO',
}

export interface Product {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  imagePath: string;
  rating: number;
  price: number;
  description: string;
  discount: number;
  dealOfTheDay: DealOfTheDay;
}
