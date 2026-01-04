import type { ProductCardProps } from "../ProductCard/ProductCard";
import ProductCard from "../ProductCard/ProductCard";
import { Container } from "@mui/material";
import "./ProductDisplay.scss";

export default function ProductDisplay({
  ProductsList,
}: {
  ProductsList: ProductCardProps[];
}) {
  return (
    <Container className="product-display" maxWidth={false} disableGutters>
      {ProductsList.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Container>
  );
}
