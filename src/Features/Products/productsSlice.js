import { createSlice } from '@reduxjs/toolkit';

const INITAL_STATE = {
   products: null,
   productsFetchLoading: false,
   productsFetchError: null,
};

const ProductSlice = createSlice({
   name: 'products',
   initialState: INITAL_STATE,
   reducers: {
      fetchProducts: (state) => {
         console.log('fetch product start');
         state.productsFetchLoading = true;
      },
      fetchProductsLoading: (state) => {
         state.productsFetchLoading = true;
      },
      getProductsData: (state, action) => {
         state.productsFetchLoading = false;
         state.productsFetchError = null;
         state.products = action.payload;
      },
   },
});

export const { fetchProducts, fetchProductsLoading, getProductsData } = ProductSlice.actions;
export default ProductSlice;
