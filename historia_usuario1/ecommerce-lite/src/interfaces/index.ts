export interface TripDetails {
  nights: number;
  days: number;
  maxGroupSize: number;
  unit: string;
}

export interface Destination {
  code: string;
  name: string;
  operator: string;
  availableSpots: number;
  pricePerPerson: number;
  isAvailable: boolean;
  type: string;
  imageUrl: string;
  createdAt: string;
  tags?: string[];
  tripDetails?: TripDetails;
  description?: string;
}

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
  role: "admin" | "customer" | "agent";
  address: Address;
  createdAt: string;
  tags?: string[];
  description?: string;
}
