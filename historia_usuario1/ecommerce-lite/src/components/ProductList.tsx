import React from "react";
import { Destination } from "../interfaces";
import ProductCard from "./ProductCard";

interface DestinationListProps {
  destinations: Destination[];
}

const ProductList: React.FC<DestinationListProps> = ({ destinations }) => {
  return (
    <section className="product-list">
      {destinations.map((destination) => (
        <ProductCard key={destination.code} destination={destination} />
      ))}
    </section>
  );
};

export default ProductList;
