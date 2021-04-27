const DEV = 'https://api.mercadolibre.com';

const BASE_URL =  DEV;

const ENV = {
  BASE_URL,
  API: {
    HEADERS: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    PRODUCTS: `${BASE_URL}`,
  },
};

export default ENV;


