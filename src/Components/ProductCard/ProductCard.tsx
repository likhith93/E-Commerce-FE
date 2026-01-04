import {
    Button,
    Card,
    CardMedia,
    CardContent,
    Typography } from "@mui/material";

import "./ProductCard.scss";

export interface ProductCardProps {
    id: number;
    name: string;
    image: string;
    category: string;
    brand: string;
    price: number;
    description: string;
}
export default function ProductCard(ProductDetails: ProductCardProps) 
{
    return (
      <Card className="product-card" component={Button}>
        <CardMedia
          component="img"
          height="180"
          image={ProductDetails.image || "/placeholder.png"}
          alt={ProductDetails.name}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {ProductDetails.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ₹{Number(ProductDetails.price).toLocaleString()}
          </Typography>
        </CardContent>
      </Card>
    );

}