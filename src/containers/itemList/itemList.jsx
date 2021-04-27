import React, {  } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../components/shared/Product/Product';
import { useSelector } from 'react-redux';
// import { ProductsContext } from '../../store/context/context';

const ProductList = () => {
  //const { search } = useLocation();
  const history = useHistory();
  //const dispatch = useDispatch();
  const isLoading = useSelector(
    (state) => state.ProductsReducer.loading,
  );

  const items = useSelector(state => {
    if(!isLoading) {
        return state.ProductsReducer.items
    };
    return null;
 });
 const categories = useSelector(state => {
  if(!isLoading) {
      return state.ProductsReducer.categories
  };
  return null;
});
 console.log({items})
 console.log({categories})


  const handleClick = (id) => {
    history.push(`/items/${id}`);
  };
  if (items) {
    return items.map((product) => {
      const {
        id, title, thumbnail, price, address, shipping,
      } = product;
      return (
    
        <Card
          key={id}
          id={id}
          title={title}
          thumbnail={thumbnail}
          description={title}
          price={price}
          address={address}
          shipping={shipping}
          product={product}
          handleClick={handleClick}
        /> 
      );
    });

  } 
  
};

export default ProductList;
