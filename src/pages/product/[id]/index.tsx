import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import Stripe from "stripe";
import { stripe } from "../../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../../styles/pages/product";
import "react-loading-skeleton/dist/skeleton.css";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  description: string | null;
  price: string;
}
interface ProductPageProps {
  product: Product;
}

export default function ProductPage(props: ProductPageProps) {
  const { product } = props;

  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <>
        <Head>
          <title>...</title>
        </Head>
        <ProductContainer>
          <Skeleton
            height={656}
            width={576}
            highlightColor="#c4c4cc"
            baseColor="#e1e1e6"
            direction="rtl"
          />
          <ProductDetails css={{ span: { marginTop: 0 } }}>
            <Skeleton
              height={45}
              width={520}
              highlightColor="#c4c4cc"
              baseColor="#e1e1e6"
              direction="rtl"
            />
            <Skeleton
              height={45}
              width={124}
              highlightColor="#c4c4cc"
              baseColor="#e1e1e6"
              direction="rtl"
            />
            <Skeleton
              height={174}
              width={520}
              highlightColor="#c4c4cc"
              baseColor="#e1e1e6"
              direction="rtl"
            />
            <Skeleton
              height={69}
              width={520}
              highlightColor="#c4c4cc"
              baseColor="#e1e1e6"
              direction="rtl"
            />
          </ProductDetails>
        </ProductContainer>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            width={520}
            height={480}
            alt={String(product.description)}
          />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button>Comprar</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const productId = String(params?.id);

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  const normalizePrice = new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(price.unit_amount! / 100);

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        price: normalizePrice,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
