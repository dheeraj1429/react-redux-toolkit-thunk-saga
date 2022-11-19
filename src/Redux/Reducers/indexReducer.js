import { ACTION_TYPES } from '../ActionTypes/actionTypes';

const INITAL_STATE = {
   products: null,
   productsLoading: false,
   productsError: null,
};

const indexReducer = function(state = INITAL_STATE, action) {
   switch (action.type) {
      case ACTION_TYPES.GET_PRODUCTS:
         return {
            products: action.data,
            productsLoading: false,
            productsError: null,
         };
      default: {
         return {
            ...state,
         };
      }
   }
};

export default indexReducer;
