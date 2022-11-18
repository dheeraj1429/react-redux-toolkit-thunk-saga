import { ACTION_TYPES } from '../ActionTypes/ActionTypes';

export const fetchProductsLoadingHandler = function(data) {
   return {
      type: ACTION_TYPES.FETCH_PRODUCTS_LOADING,
      payload: data,
   };
};
