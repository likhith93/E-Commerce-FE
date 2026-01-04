import './App.css'
import ProductCard from './Components/ProductCard/ProductCard'
import TopNav from './Components/TopNav/TopNav'
import type { ProductCardProps } from './Components/ProductCard/ProductCard'
import ProductDisplay from './Components/ProductDisplay/ProductDisplay'
function App() {

  const Product1:ProductCardProps = {
    id: 1,
    name: "stringstringstringstringstring",  
    image: "string",
    price: 1,
    description: "string",
    supplier: "string"
  }
    const Product2:ProductCardProps = {
    id: 1,
    name: "stringstringstringstringstring",  
    image: "string",
    price: 1,
    description: "string",
    supplier: "string"
  }
    const Product3:ProductCardProps = {
    id: 1,
    name: "stringstringstringstringstring",  
    image: "string",
    price: 1,
    description: "string",
    supplier: "string"
  }
    const Product4:ProductCardProps = {
    id: 1,
    name: "stringstringstringstringstring",  
    image: "string",
    price: 1,
    description: "string",
    supplier: "string"
  }
    const Product5:ProductCardProps = {
    id: 1,
    name: "stringstringstringstringstring",  
    image: "string",
    price: 1,
    description: "string",
    supplier: "string"
  }

  const productList: ProductCardProps[] = [Product1, Product2, Product3, Product4, Product5];
  return (
    <>
      <TopNav />
      <ProductDisplay ProductsList={productList} />
    </>
  )
}

export default App
