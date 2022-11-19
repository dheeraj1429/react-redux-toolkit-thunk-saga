import { takeEvery, call, put } from 'redux-saga/effects';
import { getProductsData } from '../Products/productsSlice';

function* getProducts() {
   const res = yield call(() => fetch(`https://fakestoreapi.com/products`));
   const data = yield res.json();
   yield put(getProductsData(data));
}

function* productsSaga() {
   yield takeEvery('products/fetchProducts', getProducts);
}

export default productsSaga;
