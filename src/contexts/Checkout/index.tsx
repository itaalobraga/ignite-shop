import { createContext, useContext, useState } from "react";
import * as Types from "./types";

export const CheckoutContext = createContext({} as Types.CheckoutContext);

export function CheckoutProvider(props: Types.CheckoutProvider) {
  const { children } = props;

  const [cart, setCart] = useState<Types.Product[]>([]);

  function handleAddProductToCart(product: Types.Product) {
    setCart((state) => [...state, product]);
  }

  return (
    <CheckoutContext.Provider value={{ cart, handleAddProductToCart }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckout = () => useContext(CheckoutContext);
