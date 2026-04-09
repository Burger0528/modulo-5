// RF_01: Componente Button tipado y reutilizable
import React from "react";

export interface ButtonProps {
  // CA_04: text es obligatorio
  text: string;
  // CA_01: variant con default primary
  variant?: "primary" | "secondary" | "danger";
  // CA_02: size con default md
  size?: "sm" | "md" | "lg";
  // CA_03: props opcionales
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  onClick,
}) => {
  const className = `btn btn-${variant} btn-${size}${loading ? " btn-loading" : ""}`;

  return (
    <button className={className} disabled={disabled || loading} onClick={onClick}>
      {loading ? (
        <span className="btn-spinner" />
      ) : (
        <>
          {leftIcon && <span className="btn-icon">{leftIcon}</span>}
          <span>{text}</span>
          {rightIcon && <span className="btn-icon">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
