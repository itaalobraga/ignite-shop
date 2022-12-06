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

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <CheckoutButton>
          <Handbag size={32} weight="bold" color="#8D8D99" />
        </CheckoutButton>
      </Header>
      <Component {...pageProps} />
      <CheckoutContainer>
        <button>
          <X size={24} weight="bold" color="#8D8D99" />
        </button>
        <CheckoutContent>
          <h1>Sacola de compras</h1>
          <div className="product-wrapper">
            <Product>
              <ImageContainer></ImageContainer>
              <div>
                <span>Camiseta Beyond the Limits</span>
                <strong>R$ 79,90</strong>
                <button>Remover</button>
              </div>
            </Product>
            <Product>
              <ImageContainer></ImageContainer>
              <div>
                <span>Camiseta Beyond the Limits</span>
                <strong>R$ 79,90</strong>
                <button>Remover</button>
              </div>
            </Product>
            <Product>
              <ImageContainer></ImageContainer>
              <div>
                <span>Camiseta Beyond the Limits</span>
                <strong>R$ 79,90</strong>
                <button>Remover</button>
              </div>
            </Product>
          </div>
        </CheckoutContent>
      </CheckoutContainer>
    </Container>
  );
}
