import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/logo.svg";
import { CheckoutButton, Container, Header } from "../styles/pages/app";
import Image from "next/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import { CheckoutProvider, useCheckout } from "../contexts/Checkout";
import { Checkout } from "../components/Checkout";
import { useState } from "react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const { totalProducts } = useCheckout();

  console.log("totalProducts => ", totalProducts);

  const [isOpen, setIsOpen] = useState(false);

  function handleCheckout() {
    setIsOpen((state) => !state);
  }

  return (
    <CheckoutProvider>
      <Container>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>
          <CheckoutButton onClick={handleCheckout}>
            <Handbag size={32} weight="bold" color="#8D8D99" />
          </CheckoutButton>
        </Header>
        <Component {...pageProps} />
        <Checkout isOpen={isOpen} handleCheckout={handleCheckout} />
      </Container>
    </CheckoutProvider>
  );
}
