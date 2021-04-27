import ENV from '../env';
import Fetch from '../utils/fetch';
import Logger from '../utils/loggers';

const HttpMethods = {
  post(path, data, additionalHeaderParams) {
    const method = 'POST';
    const apiHeaders = ENV.API.HEADERS;
    const headers = {
      ...apiHeaders,
      ...(additionalHeaderParams && additionalHeaderParams),
    };
    const body = JSON.stringify(data);
    return this.fetch(path, { method, headers, body });
  },

  put(path, data) {
    const method = 'PUT';
    const headers = ENV.API.HEADERS;
    const body = JSON.stringify(data);

    return this.fetch(path, {
      method,
      headers,
      body,
      mode: 'no-cors',
    });
  },

  delete(path) {
    const method = 'DELETE';
    const headers = ENV.API.HEADERS;
    // const body = JSON.stringify(data);

    return this.fetch(path, { method, headers, mode: 'no-cors' });
  },

  get(path, params = {}, additionalHeaderParams) {
    const method = 'GET';
    const apiHeaders = ENV.API.HEADERS;
    const headers = {
      ...apiHeaders,
      ...(additionalHeaderParams && additionalHeaderParams),
    };

    let url = Object.keys(params)
      .map((param) => `${param}=${params[param]}&`)
      .join('');
    url = `${path}${url ? '?' + url : ''}`;

    return this.fetch(url, { method, params, headers });
  },

  fetch(path, { method, headers, params, body }) {
    const now = +new Date();
    return Fetch(path, { method, params, headers, body })
      .then((res) => res.json())
      .then((res) => {
        Logger.log(`[${method}] end (took:' + (+${new Date() - now}) + 'ms)`);
        return res;
      });
  },
};

export default HttpMethods;
