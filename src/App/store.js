import { configureStore } from '@reduxjs/toolkit';
import shopSlice from '../Features/Shop/ShopSlice';
import AuthSlice from '../Features/Auth/AuthSlice';
import logger from 'redux-logger';

const store = configureStore({
   reducer: {
      shop: shopSlice.reducer,
      auth: AuthSlice.reducer,
   },
   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
