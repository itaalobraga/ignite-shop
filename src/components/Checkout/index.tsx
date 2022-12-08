import { CheckoutContainer, CheckoutContent, ImageContainer, Product } from "./styles";
import Image from "next/image";
import { HTMLAttributes, useEffect, useState } from "react";
import { useCheckout } from "../../contexts/Checkout";
import { X } from "phosphor-react";
import { formatPrice } from "../../utils/formatPrice";

interface CheckoutProps extends HTMLAttributes<HTMLDivElement> {
  handleCheckout: () => void;
  isOpen: boolean;
}

export function Checkout(props: CheckoutProps) {
  const { isOpen, handleCheckout } = props;

  const { cart, totalProducts, totalPrice, handleRemoveProduct } = useCheckout();

  return (
    <CheckoutContainer className={isOpen ? "opened" : ""}>
      <button onClick={handleCheckout}>
        <X size={24} weight="bold" color="#8D8D99" />
      </button>
      <CheckoutContent className={isOpen ? "opened" : ""}>
        <h1>Sacola de compras</h1>
        <div className="product-wrapper">
          {cart.map((product) => {
            return (
              <Product key={product.id}>
                <ImageContainer>
                  <Image
                    src={product.imageUrl}
                    width={94}
                    height={94}
                    alt={String(product.description)}
                    priority
                  />
                </ImageContainer>
                <div>
                  <span>{product.name}</span>
                  <strong>{formatPrice(product.price)}</strong>
                  <button onClick={() => handleRemoveProduct(product.id)}>Remover</button>
                </div>
              </Product>
            );
          })}
        </div>
        <div className="summary">
          <div>
            <span className="summary-quantity">Quantidade</span>
            <span className="summary-products-amount">{totalProducts} itens</span>
          </div>
          <div>
            <span className="summary-total">Valor total</span>
            <span className="summary-price">{totalPrice}</span>
          </div>
          <button>Finalizar compra</button>
        </div>
      </CheckoutContent>
    </CheckoutContainer>
  );
}
