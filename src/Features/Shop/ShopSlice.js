import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// ACTIONS TYPES
const STATUS = Object.freeze({
   IDLE: 'idle',
   ERROR: 'error',
   LOADING: 'loading',
});

// initial state object.
const INITIAL_STATE = {
   products: null,
   status: STATUS.IDLE,
};

// Reducer slice
const shopSlice = createSlice({
   name: 'Shop',
   initialState: INITIAL_STATE,
   reducers: {
      // actions
      getProductLoading: (state, action) => {
         state.status = action.payload;
      },

      // actions
      products: (state, action) => {
         state.products = action.payload;
      },
   },

   // all fetch action function.
   extraReducers: (builder) => {
      builder
         .addCase(fetchProducts.pending, (state) => {
            state.status = STATUS.LOADING;
         })
         .addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.status = STATUS.IDLE;
         })
         .addCase(fetchProducts.rejected, (state) => {
            state.status = STATUS.ERROR;
         });
   },
});

export const fetchProducts = createAsyncThunk('shop/products', async () => {
   const res = await fetch(`https://fakestoreapi.com/products`);
   const data = await res.json();
   return data;
});

export default shopSlice;

// nomal async function.
// export const fetchProducts = function() {
//    return async function(dispatch, getState) {
//       dispatch(getProductLoading(STATUS.LOADING));
//       try {
//          fetch(`https://fakestoreapi.com/products`)
//             .then((res) => {
//                return res.json();
//             })
//             .then((data) => {
//                dispatch(products(data));
//                dispatch(getProductLoading(STATUS.IDLE));
//             });
//       } catch (err) {
//          dispatch(getProductLoading(STATUS.ERROR));
//          console.log(err);
//       }
//    };
// };
