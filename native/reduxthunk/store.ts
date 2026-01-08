import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware
  } from "redux";

import { thunk, ThunkMiddleware } from "redux-thunk";
  
  import productReducer from "./productReducer";
  import {
    ProductState,
    ProductActionTypes
  } from "./productTypes";
  
  const rootReducer = combineReducers({
    products: productReducer
  });
  
  export type RootState = {
    products: ProductState;
  };
  
  const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(
      thunk as unknown as ThunkMiddleware<RootState, ProductActionTypes>
    )
  );
  
  export default store;
  