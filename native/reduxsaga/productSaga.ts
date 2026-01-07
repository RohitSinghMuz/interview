import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "./productSlice";

function fetchProductsApi() {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
}

function* fetchProductsWorker(): Generator<any, void, any> {
  try {
    const response = yield call(fetchProductsApi);
    yield put(fetchProductsSuccess(response.products));
  } catch (error: any) {
    yield put(fetchProductsFailure(error.message));
  }
}

export default function* productSaga() {
  yield takeLatest(fetchProductsRequest.type, fetchProductsWorker);
}
