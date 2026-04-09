// RF_03: Componente Card tipado y reutilizable
import React from "react";
import Badge from "./Badge";

export interface CardProps {
  // CA_10: props obligatorias
  title: string;
  type: "green" | "white" | "black";
  // CA_11: imageUrl opcional
  imageUrl?: string;
  // CA_12: footer opcional (pensado para Button)
  footer?: React.ReactNode;
  children?: React.ReactNode;
  // Badge principal integrado (CA_13)
  badgeLabel: string;
  badgeStatus?: "success" | "warning" | "info" | "error" | "neutral";
}

const Card: React.FC<CardProps> = ({
  title,
  type,
  imageUrl,
  footer,
  children,
  badgeLabel,
  badgeStatus = "neutral",
}) => {
  return (
    <div className={`card card-${type}`}>
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="card-body">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          {/* CA_13: Badge siempre presente en el diseño */}
          <Badge label={badgeLabel} status={badgeStatus} />
        </div>
        {children && <div className="card-content">{children}</div>}
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
