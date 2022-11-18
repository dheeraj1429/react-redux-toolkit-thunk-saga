import { ACTION_TYPES } from '../ActionTypes/ActionTypes';

export const fetchProducts = function() {
   return async function(dispatch) {
      try {
         const res = await fetch(`https://fakestoreapi.com/products`);
         const data = await res.json();

         if (data) {
            dispatch({
               type: ACTION_TYPES.FETCH_PRODUCTS,
               payload: data,
            });
         }
      } catch (err) {
         dispatch({
            type: ACTION_TYPES.PRODUCT_FETCH_ERROR,
            message: 'someting worng',
         });
      }
   };
};
