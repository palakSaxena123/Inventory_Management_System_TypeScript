export interface Product {
    id: number ;
    weight : string;
    quantity : string;
    name: string;
    category: string;
    subcategory: string;
    price: number;
    selectedImages: string[];
    status: string;
    sku: string;
  }
  
 export  interface RootState {
    product: {
      products: Product[]; 
      searchTerm: string[];
    };
  }
   export interface ProductsState {
    products: Product[];
    searchTerm: string[];
    totalWeight: number;
    totalProducts : number;
    totalInventory : number;
  }