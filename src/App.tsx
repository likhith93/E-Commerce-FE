import './App.css'
import ProductCard from './Components/ProductCard/ProductCard'
import TopNav from './Components/TopNav/TopNav'

function App() {

  return (
    <>
      <ProductCard 
        id={1}
        name="Sample Product"
        imageName="https://via.placeholder.com/150"
        price={29.99}
        description="This is a sample product description."
        supplier="Sample Supplier"
      />
    </>
  )
}

export default App
