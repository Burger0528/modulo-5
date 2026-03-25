// CA_10: Props tipadas estrictamente
import React from "react";
import { Product } from "../interfaces";

export interface ProductCardProps {
  product: Product;
}

// CA_09: Renderiza nombre, precio, categoría e imagen
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        {!product.isActive && <span className="badge-inactive">Inactivo</span>}
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-brand">{product.brand}</p>
        {product.description && (
          <p className="product-description">{product.description}</p>
        )}
        <div className="product-footer">
          <span className="product-price">${product.price.toLocaleString("es-CO")}</span>
          <span className="product-stock">{product.quantity} unidades</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
