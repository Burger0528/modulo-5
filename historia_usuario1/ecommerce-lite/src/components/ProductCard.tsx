import React from "react";
import { Destination } from "../interfaces";

export interface DestinationCardProps {
  destination: Destination;
}

const ProductCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={destination.imageUrl} alt={destination.name} className="product-image" />
        {!destination.isAvailable && <span className="badge-inactive">No disponible</span>}
      </div>
      <div className="product-info">
        <span className="product-category">{destination.type}</span>
        <h3 className="product-name">{destination.name}</h3>
        <p className="product-brand">{destination.operator}</p>
        {destination.description && (
          <p className="product-description">{destination.description}</p>
        )}
        <div className="product-footer">
          <span className="product-price">${destination.pricePerPerson.toLocaleString("es-CO")} / persona</span>
          <span className="product-stock">{destination.availableSpots} cupos</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
