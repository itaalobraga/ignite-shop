import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface Product {
  name: string;
  imgUrl: string;
}

interface SuccessPage {
  customerName: string;
  product: Product;
}

export default function SuccessPage(props: SuccessPage) {
  const { customerName, product } = props;

  return (
    <>
      <Head>
        <title>Compra efetuada com sucesso!</title>
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImageContainer>
          <Image src={product.imgUrl} alt="" width={120} height={110} />
        </ImageContainer>

        <p>
          Uhuul, <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já
          está a caminho da sua casa
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(context.query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;

  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imgUrl: product.images[0],
      },
    },
  };
};
