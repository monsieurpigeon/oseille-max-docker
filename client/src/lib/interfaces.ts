export interface Product {
  id: number;
  name: string;
}

export interface Customer {
  id: number;
  name: string;
}

export interface Price {
  productId: number;
  customerId: number;
  value: number;
}
