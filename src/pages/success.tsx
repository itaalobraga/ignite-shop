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
  products: Product[];
}

export default function SuccessPage(props: SuccessPage) {
  const { customerName, products } = props;

  return (
    <>
      <Head>
        <title>Compra efetuada com sucesso!</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <div>
          {products.map((product) => {
            return (
              <ImageContainer key={product.name}>
                <Image src={product.imgUrl} alt="" width={120} height={110} priority />
              </ImageContainer>
            );
          })}
        </div>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.length} camisetas
          já está a caminho da sua casa
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
    expand: ["line_items.data", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;

  const products = session.line_items?.data as Stripe.LineItem[];

  const normalizedProducts = products.map((diversifiedProduct) => {
    const { product: defaultProduct } = diversifiedProduct.price as Stripe.Price;

    const product = defaultProduct as Stripe.Product;

    return {
      name: product.name,
      imgUrl: product.images[0],
    };
  });

  return {
    props: {
      customerName,
      products: normalizedProducts,
    },
  };
};
