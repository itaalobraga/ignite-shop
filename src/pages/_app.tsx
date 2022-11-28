import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/logo.svg";
import { CheckoutButton, Container, Header } from "../styles/pages/app";
import Image from "next/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";

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
      <Component {...pageProps} />;
    </Container>
  );
}
