// Card reutilizable para el dashboard
import React from "react";

export interface CardProps {
  title: string;
  value: string | number;
  description?: string;
  accent?: "blue" | "green" | "orange" | "red";
}

const Card: React.FC<CardProps> = ({ title, value, description, accent = "blue" }) => {
  return (
    <div className={`card card-${accent}`}>
      <span className="card-title">{title}</span>
      <span className="card-value">{value}</span>
      {description && <span className="card-description">{description}</span>}
    </div>
  );
};

export default Card;
