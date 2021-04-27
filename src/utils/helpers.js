import data from '../../package.json';

export const defaultErrorMessage = 'Oops! Something went wrong';

export const handleError = (error) => {
  if (error !== undefined) {
    if (error.response) {
      if (error.response.status < 500) {
        if (error.response.data) {
          const errorMessage = error.response.data.message;
          console.log(errorMessage);
        }
      }
    } else {
      console.log(error);
    }
  }
};

export const getErrorMessage = (error) => {
  let errorMessage = defaultErrorMessage;
  if (error !== undefined) {
    const errorResponse = error.response ? error.response.data : null;
    if (errorResponse) {
      errorMessage = errorResponse.message;
    }
  }
  return errorMessage;
};


export const getPriceText = (currency, price) => {
  const local = process.env.REACT_APP_LOCAL|| 'en-US';
  return `${currency} ${price.toLocaleString(local)}`;
};

export const getAuthorData = () => {
  const [name, lastname] = data.author.split(' ');
  return [name, lastname];
};

export const getCategories = (filters) => filters
  .filter((x) => x.id === 'category')
  .reduce((acc, value) => [...acc, ...value.values], [])
  .reduce((acc, value) => [...acc, ...value.path_from_root], []);

export const validateString = (params) => {
    return params.replace(/[^a-zA-Z0-9]/g, '');
  };

  export const formatNumToCurrency = (number, minimumFractionDigits = 2) => {
    return Number(number).toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits,
    });
  };

