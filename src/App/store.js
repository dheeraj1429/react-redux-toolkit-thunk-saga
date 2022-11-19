import { configureStore } from '@reduxjs/toolkit';
import shopSlice from '../Features/Shop/ShopSlice';
import AuthSlice from '../Features/Auth/AuthSlice';
import productsSlice from '../Features/Products/productsSlice';

import createSagaMiddleware from 'redux-saga';
import productsSaga from '../Features/Saga/productsSaga';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
   reducer: {
      shop: shopSlice.reducer,
      auth: AuthSlice.reducer,
      product: productsSlice.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(productsSaga);
export default store;
