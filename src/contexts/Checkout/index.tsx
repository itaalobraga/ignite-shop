import { createContext, useContext, useState } from "react";
import { formatPrice } from "../../utils/formatPrice";
import * as Types from "./types";

export const CheckoutContext = createContext({} as Types.CheckoutContext);

export function CheckoutProvider(props: Types.CheckoutProvider) {
  const { children } = props;

  const [cart, setCart] = useState<Types.Product[]>([]);

  const totalProducts = cart.length;

  const totalPrice = formatPrice(cart.reduce((acc, product) => acc + product.price, 0));

  function handleAddProductToCart(product: Types.Product) {
    setCart((state) => {
      const hasExistingProduct = state.some(
        (currentProduct) => currentProduct.id === product.id
      );

      if (hasExistingProduct) {
        return state;
      }

      return [...state, product];
    });
  }

  function handleRemoveProduct(productId: string) {
    setCart((state) => state.filter((product) => product.id !== productId));
  }

  return (
    <CheckoutContext.Provider
      value={{ cart, totalProducts, totalPrice, handleAddProductToCart, handleRemoveProduct }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckout = () => useContext(CheckoutContext);
