/* import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';
import { ProductsReducer, productsReducerInitialState } from '../reducer/itemReducer';

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, productsReducerInitialState);
  return (
    <ProductsContext.Provider value={[state, dispatch]}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
 */