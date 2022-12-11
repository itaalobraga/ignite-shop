import Link from "next/link";
import { Handbag } from "phosphor-react";
import Image from "next/image";
import logoImg from "../../assets/logo.svg";
import { CheckoutButton, Container } from "./styles";
import { useCheckout } from "../../contexts/Checkout";

interface HeaderProps {
  handleCheckout: () => void;
}

export function Header(props: HeaderProps) {
  const { handleCheckout } = props;

  const { totalProducts } = useCheckout();

  return (
    <Container>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>
      <CheckoutButton onClick={handleCheckout}>
        <Handbag size={32} weight="bold" color="#8D8D99" />
        <span className="totalProducts">{totalProducts}</span>
      </CheckoutButton>
    </Container>
  );
}
