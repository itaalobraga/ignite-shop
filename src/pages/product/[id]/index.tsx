import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../../styles/pages/product";

export default function ProductPage() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camisa X</h1>
        <span>R$ 79,99</span>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis facere
          sed adipisci aperiam tenetur atque illum, sint aliquid quasi nemo consectetur
          laboriosam veritatis est eveniet error provident. Odit, voluptas nihil!
        </p>

        <button>Comprar</button>
      </ProductDetails>
    </ProductContainer>
  );
}
