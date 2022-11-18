import { ACTION_TYPES } from '../ActionTypes/ActionTypes';

const INITIAL_STATE = {
   products: null,
   productsLoading: false,
   productsError: null,
};

const indexReducer = function(state = INITIAL_STATE, action) {
   switch (action.type) {
      case ACTION_TYPES.FETCH_PRODUCTS:
         return {
            ...state,
            products: action.payload,
            productsLoading: false,
            productsError: null,
         };

      case ACTION_TYPES.FETCH_PRODUCTS_LOADING:
         return {
            ...state,
            productsLoading: action.payload,
            productsError: null,
         };

      case ACTION_TYPES.PRODUCT_FETCH_ERROR:
         return {
            ...state,
            productsError: action.payload,
            productsLoading: false,
         };

      default:
         return {
            ...state,
         };
   }
};

export default indexReducer;
