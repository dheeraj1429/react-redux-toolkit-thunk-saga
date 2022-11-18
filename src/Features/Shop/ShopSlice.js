import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const STATUS = Object.freeze({
   IDLE: 'idle',
   ERROR: 'error',
   LOADING: 'loading',
});

const INITIAL_STATE = {
   products: null,
   status: STATUS.IDLE,
};

const shopSlice = createSlice({
   name: 'Shop',
   initialState: INITIAL_STATE,
   reducers: {
      getProductLoading: (state, action) => {
         state.status = action.payload;
      },
      products: (state, action) => {
         state.products = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchProducts.pending, (state) => {
            state.status = STATUS.LOADING;
         })
         .addCase(fetchProducts.fulfilled, (state, action) => {
            console.log(action);
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

export default shopSlice;
