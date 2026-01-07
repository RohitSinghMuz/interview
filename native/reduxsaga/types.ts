export interface Product {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
  }
  
  export interface ProductState {
    loading: boolean;
    data: Product[];
    error: string | null;
  }
  