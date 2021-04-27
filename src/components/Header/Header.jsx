import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import FormSearch from './FormSearch/FormSearch'
import { useSelector, useDispatch } from 'react-redux';
import ItemsActions from '../../store/actions/itemsActions'


import { validateString } from '../../utils/helpers';
import logoML from '../../assets/images/Logo_ML.png';



const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const history = useHistory();
  const [activeSearch, setActiveSearch] = useState(false);
  const {requestProducts} = ItemsActions;
  const isLoading = useSelector(
    (state) => state.ProductsReducer.loading,
  );


  const handleSearch = (event) => {
    event.preventDefault();
    if (search) {
      setActiveSearch(true);
    }
  };
  useEffect(() => {
    let queryParams = validateString(search) ;
    if (activeSearch && queryParams) {
      dispatch(
        requestProducts(
          queryParams
        ),
      );
      console.log('hice clic en el boton')
      !isLoading && history.push(`/items?${queryParams}`);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSearch, search]); 
 
  return (
    <HeaderComp className="grid-container">
      <div className="header-wrapper__logo">
        <Link to="/">
          <img src={logoML} alt="Mercado Libre" />
        </Link>
      </div>
      <div className="header-wrapper__search">
        <FormSearch handleSearch = {handleSearch} setSearch={setSearch} search={search}/>
      </div>
    </HeaderComp>
  );
};


const HeaderComp = styled.header`
  background-color: #ffe600;
  max-height: 56px;
  height: 56px;

  .header-wrapper__logo{
    display: flex;
    justify-content: flex-end;
    align-self: center;
    grid-column: 2 / 3;
  }
  .header-wrapper__search{
    display: flex;
    align-self: center;
    justify-content: flex-start;
    width: 100%;
  }
`

export default Header;
