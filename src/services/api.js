import ENV from '../env';
import Logger from '../utils/loggers';
import HttpMethods from './http-methods';

const API = {
  getItems(queryParams) {
    Logger.log('[RETRIEVE ITEMS get] init');
    return HttpMethods.get(`${ENV.API.PRODUCTS}/sites/MLA/search?q=${queryParams}`, {}, );
  },

  getItem(id) {
    Logger.log('[RETRIEVE ITEM get] init');
    return HttpMethods.get(`${ENV.API.PRODUCTS}/items/${id}`, {}, );
  },

  getItemDescription(id) {
    Logger.log('[RETRIEVE ITEM DESCRIPTION get] init');
    return HttpMethods.get(`${ENV.API.PRODUCTS}/items/${id}/description`, {}, );
  },

};

export default API;
