
export enum UserRole {
  GUEST = 'GUEST',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN'
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  availability: 'In Stock' | 'Limited' | 'Out of Stock';
  lastUpdated: string;
}

export interface QuoteRequest {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: { productId: string; quantity: number; name: string }[];
  status: 'Pending' | 'Approved' | 'Rejected';
  timestamp: string;
  totalEstimated?: number;
}

export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  details: string;
  timestamp: string;
  ipAddress: string;
}