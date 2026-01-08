import { Dispatch } from "redux";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ProductActionTypes,
  Product
} from "./productTypes";

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductActionTypes>) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    try {
      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data: { products: Product[] } = await response.json();

      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: data.products
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        payload: (error as Error).message
      });
    }
  };
};
