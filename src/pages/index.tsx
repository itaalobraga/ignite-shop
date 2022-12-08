import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";
import { Stripe } from "stripe";
import { stripe } from "../lib/stripe";
import type { GetStaticProps } from "next";
import Head from "next/head";
import { Handbag } from "phosphor-react";
import { formatPrice } from "../utils/formatPrice";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  description: string | null;
  price: number;
}

interface HomeProps {
  products: Product[];
}

export default function HomePage(props: HomeProps) {
  const { products } = props;

  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView: 3,
        spacing: 48,
      },
      loop: true,
      mode: "free",
      drag: true,
    },
    [autoSwitch]
  );

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product
              className="keen-slider__slide"
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Image
                src={product.imageUrl ?? ""}
                alt={product.description ?? ""}
                width={520}
                height={520}
                priority
              />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{formatPrice(product.price)}</span>
                </div>
                <button>
                  <Handbag size={32} weight="bold" color="#FFFFFF" />
                </button>
              </footer>
            </Product>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products: Product[] = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price: price.unit_amount! / 100,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};

function autoSwitch(slider: KeenSliderInstance) {
  let timeout: ReturnType<typeof setTimeout>;

  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 2400);
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });

    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });

    nextTimeout();
  });

  slider.on("dragStarted", clearNextTimeout);

  slider.on("animationEnded", nextTimeout);

  slider.on("updated", nextTimeout);
}
