import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsState, Product } from "../../Types/Product";

const loadState = (): ProductsState | undefined => {
  try {
    const serializedState = localStorage.getItem("productsState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from local storage:", error);
    return undefined;
  }
};

const initialState: ProductsState = loadState() || {
  products: [],
  searchTerm: [],
  totalWeight: 0,
  totalProducts: 0,
  totalInventory: 0,
};

const updateTotals = (state: ProductsState) => {
  state.totalProducts = state.products.length;

  state.totalWeight = state.products.reduce(
    (sum, product) => sum + parseFloat(product.weight),
    0
  );
  state.totalInventory = state.products.reduce(
    (sum, product) => sum + (parseInt(product.quantity, 10) || 0),
    0
  );
  saveState(state);
};

// Function to save state to local storage
const saveState = (state: ProductsState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("productsState", serializedState);
  } catch (error) {
    console.error("Error saving state to local storage:", error);
  }
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const newProduct = action.payload;

      state.products.push(newProduct);
      // Save entire state to local storage
      updateTotals(state);
    },

    deleteProduct: (state, action: PayloadAction<{ id: number; weight: string; quantity: string }>) => {
      const { id, weight, quantity } = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
      state.totalWeight -= parseFloat(weight);
      state.totalProducts -= 1;
      state.totalInventory -= parseInt(quantity, 10) || 0;
      updateTotals(state);
    },

    editProduct: (state, action: PayloadAction<{ id: string; } & Partial<Product>>) => {
      const { id, ...updatedData } = action.payload;
      const index = state.products.findIndex((product) => product.id === id);

      if (index !== -1) {
        const previousWeight = parseFloat(state.products[index].weight);
        const previousQuantity = parseInt(state.products[index].quantity, 10) || 0;

        state.products[index] = { ...state.products[index], ...updatedData };

        const updatedWeight = parseFloat(state.products[index].weight);
        const updatedQuantity = parseInt(state.products[index].quantity, 10) || 0;

        state.totalWeight = state.totalWeight - previousWeight + updatedWeight;
        state.totalInventory = state.totalInventory - previousQuantity + updatedQuantity;

        saveState(state);
      }
    },

    searchProduct: (state, action: PayloadAction<string[]>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addProduct, deleteProduct, editProduct, searchProduct } = productSlice.actions;
export default productSlice.reducer;
