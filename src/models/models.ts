export interface ProductModel {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
  tags: string[];
  reviews: Review[];
}

interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export interface CartModel extends Array<ProductModel> {}
