// RF_02: Componente Badge tipado y reutilizable
import React from "react";

export interface BadgeProps {
  // CA_06: label obligatorio
  label: string;
  // CA_07: status opcional con default neutral
  status?: "success" | "warning" | "info" | "error" | "neutral";
  // CA_08: icon opcional
  icon?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ label, status = "neutral", icon }) => {
  return (
    <span className={`badge badge-${status}`}>
      {icon && <span className="badge-icon">{icon}</span>}
      <span>{label}</span>
    </span>
  );
};

export default Badge;
