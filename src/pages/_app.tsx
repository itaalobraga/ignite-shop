import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";

import { CheckoutProvider } from "../contexts/Checkout";
import { Checkout } from "../components/Checkout";
import { useState } from "react";
import { Header } from "../components/Header";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleCheckout() {
    setIsOpen((state) => !state);
  }

  return (
    <CheckoutProvider>
      <Container>
        <Header handleCheckout={handleCheckout} />
        <Component {...pageProps} />
        <Checkout isOpen={isOpen} handleCheckout={handleCheckout} />
      </Container>
    </CheckoutProvider>
  );
}
