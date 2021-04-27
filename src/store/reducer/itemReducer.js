import { actions } from '../actions/itemsActions'; 
import {
  getCategories,
} from '../../utils/helpers';
  export const InitialState = {
    author: {},
    items: [],
    categories: [],
    loading: false,
    error: null,
    item: {},
    description: '',
    data:'',
  };
  
  const ProductsReducer = (state = { ...InitialState }, action) => {
    switch (action.type) {
      case actions.REQUEST_FOR_PRODUCTS_START:
      case actions.REQUEST_FOR_PRODUCT_START:
      case actions.REQUEST_FOR_PRODUCT_DESCRIPTION_START:
        return { ...state, loading: true, error: null };
      case actions.REQUEST_FOR_PRODUCTS_ERROR:
      case actions.REQUEST_FOR_PRODUCT_ERROR:
      case actions.REQUEST_FOR_PRODUCT_DESCRIPTION_ERROR:
        return { ...state, loading: false, error: action.payload };
      case actions.REQUEST_FOR_PRODUCTS_SUCCESS:
        return {
          ...state,
          items: action.data.results,
          loading: false,
          data:action.data.results,
          categories: getCategories(action.data.filters),
          author: action.data.author,
          item:{},
        };
      case actions.REQUEST_FOR_PRODUCT_SUCCESS:
        return {
          ...state,
          item: action.data,
          author: action.data.author,
          description: action.data,
          loading: false,
        };
      case actions.REQUEST_FOR_PRODUCT_DESCRIPTION_SUCCESS:
          return {
            ...state,
            description: action.data,
            loading: false,
          };
      default:
        return state;
    }
  };
  
  export default ProductsReducer;