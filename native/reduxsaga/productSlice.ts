import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductState } from "./types";

const initialState: ProductState = {
  loading: false,
  data: [],
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsRequest: (state: { loading: boolean; }) => {
      state.loading = true;
    },
    fetchProductsSuccess: (state: { loading: boolean; data: any; }, action: PayloadAction<Product[]>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productSlice.actions;

export default productSlice.reducer;
