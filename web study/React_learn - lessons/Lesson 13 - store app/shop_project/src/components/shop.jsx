import { useState } from "react";
import Product from "./product";
import productsData from "../data/products";

function Shop() {
  const [products, setProducts] = useState(productsData);

  const updateQuantity = (id, quantity) => {
    setProducts(
      products.map((product) => {
        if (product.id !== id) {
          return product;
        }
        return { ...product, quantity };
      })
    );
  };

  if (!products.length) {
    return <div>No products right now</div>;
  }

  return (
    <div className="d-flex justify-content-center flex-row flex-wrap gap-2">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          id={product.id}
          onChange={updateQuantity}
        />
      ))}
    </div>
  );
}

export default Shop;
