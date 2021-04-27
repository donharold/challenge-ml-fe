import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ProductList from '../itemList/itemList';
import ItemDetail from '../../components/itemDetail/ItemDetail';
import Breadcrumbs from '../../components/shared/BreadCrumbs/BreadCrumbs';

const Main = () => {
  const { pathname, search } = useLocation();
  const { id } = useParams();
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

  const renderContent = ({ pathName, searchText, productId }) => {
    if (items && searchText !== '' && pathName === '/items' && !productId) {
      return (
        <ContainerList>
           <ProductList /> 
        </ContainerList>
      );
    }
    if (searchText === '' && pathName.includes('/items/') && productId) {
      return (
        <ProductContainerDetail>
          <ItemDetail />
        </ProductContainerDetail>
      );
    }
    return null;
  };

  const renderNavigation = ({
    pathname: pathName,
    search: searchText,
    id: productId,
  }) => {
    const pathNames = ['/items', '/items/'];
    const containsPath = (element) => pathName.includes(element);
    if (categories && pathNames.some(containsPath)) {
      return (
        <>
          <Breadcrumbs categories={categories} /> 
          <div >
            {renderContent({ pathName, searchText, productId })}
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <main>
      {renderNavigation({
        pathname,
        search,
        id,
      })}
    </main>
  );
};

const ContainerList = styled.section`
  max-width: 980px;
  margin: 0 auto;
`;

const ProductContainerDetail = styled.section`
  background: white;
  max-width: 980px;
  margin: 0 auto;
  padding: 24px;
`;

export default Main;
