import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/logo.svg";
import {
  CheckoutButton,
  CheckoutContainer,
  CheckoutContent,
  Container,
  Header,
  ImageContainer,
  Product,
} from "../styles/pages/app";
import Image from "next/image";
import Link from "next/link";
import { Handbag, X } from "phosphor-react";
import { useContext, useState } from "react";
import { CheckoutContext, CheckoutProvider, useCheckout } from "../contexts/Checkout";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useCheckout();

  const handleCheckoutContainer = () => {
    setIsOpen((state) => !state);
  };

  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <CheckoutButton onClick={handleCheckoutContainer}>
          <Handbag size={32} weight="bold" color="#8D8D99" />
        </CheckoutButton>
      </Header>
      <CheckoutProvider>
        <Component {...pageProps} />
      </CheckoutProvider>
      <CheckoutContainer className={isOpen ? "opened" : ""}>
        <button onClick={handleCheckoutContainer}>
          <X size={24} weight="bold" color="#8D8D99" />
        </button>
        <CheckoutContent className={isOpen ? "opened" : ""}>
          <h1>Sacola de compras</h1>
          <div className="product-wrapper">
            {cart?.map((product) => {
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
                    <strong>{product.price}</strong>
                    <button>Remover</button>
                  </div>
                </Product>
              );
            })}
          </div>
          <div className="summary">
            <div>
              <span className="summary-quantity">Quantidade</span>
              <span className="summary-products-amount">{cart.length} itens</span>
            </div>
            <div>
              <span className="summary-total">Valor total</span>
              <span className="summary-price">R$ 270,00</span>
            </div>
            <button>Finalizar compra</button>
          </div>
        </CheckoutContent>
      </CheckoutContainer>
    </Container>
  );
}
