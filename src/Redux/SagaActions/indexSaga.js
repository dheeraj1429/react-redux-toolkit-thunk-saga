import { ACTION_TYPES } from '../ActionTypes/actionTypes';
import { put, takeEvery } from 'redux-saga/effects';

function* getProducts() {
   const res = yield fetch(`https://fakestoreapi.com/products`);
   const data = yield res.json();
   if (data) {
      yield put({
         type: ACTION_TYPES.GET_PRODUCTS,
         data: data,
      });
   }
}

function* indexSaga() {
   yield takeEvery(ACTION_TYPES.FETCH_PRODUCTS, getProducts);
}

export default indexSaga;
