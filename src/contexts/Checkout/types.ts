import { ReactNode } from "react";

export interface CheckoutProvider {
  children: ReactNode;
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  description: string | null;
  price: number;
}

export interface CheckoutContext {
  cart: Product[];
  totalProducts: number;
  totalPrice: string;
  handleAddProductToCart: (product: Product) => void;
  handleRemoveProduct: (productId: string) => void;
}
