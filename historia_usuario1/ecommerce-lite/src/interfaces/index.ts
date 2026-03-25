// CA_04: Interface Product con atributos obligatorios y opcionales (CA_06)
export interface Dimensions {
  width: number;
  height: number;
  depth: number;
  unit: string;
}

export interface Product {
  sku: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  isActive: boolean;
  category: string;
  imageUrl: string;
  createdAt: string;
  // CA_06: Propiedades opcionales
  tags?: string[];
  dimensions?: Dimensions;
  description?: string;
}

// CA_05: Interface User con atributos obligatorios y opcionales (CA_06)
export interface Address {
  street: string;
  city: string;
  country: string;
  zipCode: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  isActive: boolean;
  role: "admin" | "customer" | "seller";
  address: Address;
  createdAt: string;
  // CA_06: Propiedades opcionales
  tags?: string[];
  description?: string;
}
