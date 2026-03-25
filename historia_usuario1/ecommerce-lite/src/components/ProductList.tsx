// CA_08: Listado de productos usando .map()
import React from "react";
import { Product } from "../interfaces";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard key={product.sku} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
