import type { ProductCardProps } from "../ProductCard/ProductCard";
import ProductCard from "../ProductCard/ProductCard";
import { Box } from "@mui/material";
export default function ProductDisplay({ProductsList}: {ProductsList: ProductCardProps[]}) 
{
    return(
        <Box className="product-display">
            {ProductsList.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))} 
        </Box>
    )
}