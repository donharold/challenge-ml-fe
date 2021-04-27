import api from '../../services/api';
import {
  handleError,
  getErrorMessage,
} from '../../utils/helpers';
export const actions = {
    REQUEST_FOR_PRODUCTS_START : 'REQUEST_FOR_PRODUCTS_START',
    REQUEST_FOR_PRODUCTS_ERROR : 'REQUEST_FOR_PRODUCTS_ERROR',
    REQUEST_FOR_PRODUCTS_SUCCESS: 'REQUEST_FOR_PRODUCTS_SUCCESS',
    REQUEST_FOR_PRODUCT_START : 'REQUEST_FOR_PRODUCT_START',
    REQUEST_FOR_PRODUCT_ERROR : 'REQUEST_FOR_PRODUCT_ERROR',
    REQUEST_FOR_PRODUCT_SUCCESS : 'REQUEST_FOR_PRODUCT_SUCCESS',
    REQUEST_FOR_PRODUCT_DESCRIPTION_START : 'REQUEST_FOR_PRODUCT_DESCRIPTION_START',
    REQUEST_FOR_PRODUCT_DESCRIPTION_ERROR : 'REQUEST_FOR_PRODUCT_DESCRIPTION_ERROR',
    REQUEST_FOR_PRODUCT_DESCRIPTION_SUCCESS : 'REQUEST_FOR_PRODUCT_DESCRIPTION_SUCCESS',
  };

  const ItemsActions = {
    requestProducts :  (queryStringParams )  => async (dispatch) => {
      const params = queryStringParams || '';
      dispatch({ type: actions.REQUEST_FOR_PRODUCTS_START });
      try {
        const data = await api.getItems(params);
        dispatch({
          type: actions.REQUEST_FOR_PRODUCTS_SUCCESS,
          data,
        });
        return data;
      } catch (e) {
        handleError(e);
        const errorMessage = getErrorMessage(e);
        dispatch({ type: actions.REQUEST_FOR_PRODUCTS_ERROR, payload: errorMessage });
      }
    },
    requestProduct :  (id ) => async (dispatch) => {
      console.log('request para item')
      dispatch({ type: actions.REQUEST_FOR_PRODUCT_START });
      try {
        const data = await api.getItem(id);
        dispatch({
          type: actions.REQUEST_FOR_PRODUCT_SUCCESS,
          data,

        });
        return data;
      } catch (e) {
        handleError(e);
        const errorMessage = getErrorMessage(e);
        dispatch({ type: actions.REQUEST_FOR_PRODUCT_ERROR, payload: errorMessage });
      }
    },
    requestProductDescription :  (id ) => async (dispatch) => {
      console.log('request para itemdescripcion')
      dispatch({ type: actions.REQUEST_FOR_PRODUCT_DESCRIPTION_START });
      try {
        const data = await api.getItemDescription(id);
        dispatch({
          type: actions.REQUEST_FOR_PRODUCT_DESCRIPTION_SUCCESS,
          data,
        });
        return data;
      }  catch (e) {
        handleError(e);
        const errorMessage = getErrorMessage(e);
        dispatch({ type: actions.REQUEST_FOR_PRODUCT_DESCRIPTION_ERROR, payload: errorMessage });
      }
    },
}

export default ItemsActions ;