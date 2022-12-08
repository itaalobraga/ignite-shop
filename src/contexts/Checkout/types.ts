import { ReactNode } from "react";

export interface CheckoutProvider {
  children: ReactNode;
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  description: string | null;
  price: string;
}

export interface CheckoutContext {
  cart: Product[];
  handleAddProductToCart: (product: Product) => void;
}
