import React, { useEffect, useState } from "react";
import axios from "./axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const response = await axios.get("/products");
    setProducts(response.data.products);
  }
  return (
    <>
      {error !== "" && error}
      {products.map((product, index) => {
        return (
          <h3 key={index}>
            {product.title}-${product.price}
          </h3>
        );
      })}
    </>
  );
};
export default App;
