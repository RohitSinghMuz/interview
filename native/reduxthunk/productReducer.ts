import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    ProductState,
    ProductActionTypes
  } from "./productTypes";
  
  const initialState: ProductState = {
    loading: false,
    products: [],
    error: null
  };
  
  const productReducer = (
    state = initialState,
    action: ProductActionTypes
  ): ProductState => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return { ...state, loading: true };
  
      case FETCH_PRODUCTS_SUCCESS:
        return {
          loading: false,
          products: action.payload,
          error: null
        };
  
      case FETCH_PRODUCTS_FAILURE:
        return {
          loading: false,
          products: [],
          error: action.payload
        };
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  