import { ACTION_TYPES } from '../ActionTypes/actionTypes';

export const fetchProducts = function() {
   return {
      type: ACTION_TYPES.FETCH_PRODUCTS,
   };
};
