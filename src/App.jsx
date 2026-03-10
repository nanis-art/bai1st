import products from "../public/product.json";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <div className="container">

      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}

    </div>
  );
}

export default App;
