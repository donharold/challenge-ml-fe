import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';
import ItemsActions from '../../store/actions/itemsActions';
import { formatNumToCurrency } from '../../utils/helpers';
import styled from 'styled-components';

const ItemDetail = () => {
  const { id } = useParams();
  const {requestProduct, requestProductDescription} = ItemsActions;
  const dispatch = useDispatch();

  const isLoading = useSelector(
    (state) => state.ProductsReducer.loading,
  );

  const item = useSelector(state => {
    if(!isLoading && id) {
        return state.ProductsReducer.item
    };
 });


 const description = useSelector(state => {
  if(!isLoading && Object.keys(item).length !== 0) {
      return state.ProductsReducer.description
  };
}); 

  useEffect(() => {
    if ( id && Object.keys(item).length === 0) {
      dispatch(
        requestProduct(id)
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if ( id && Object.keys(item).length === 0) {
      dispatch(
        requestProductDescription(id)
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); 
  console.log({description})

  return (
    <>
    <ItemDetailContainer>
      <div className="item__image">
        <img src={item.pictures !== undefined && item.pictures[0].secure_url} alt={item.title} />
      </div>
      <div className="item__description">
        <p>{`${item.condition === 'new' ? 'Nuevo' : 'Usado'} - ${item.sold_quantity} vendidos`}</p>
        <h1 >{item.title}</h1>
        <h2 >{formatNumToCurrency(item.price)}</h2>
        <button type="button" >
          Comprar Ahora
        </button>
      </div>
      
    </ItemDetailContainer>
    <ItemDetailDescription>
        <h2 >Descripción del producto</h2>
        <p className="product-container__image__p">{description !== undefined  && String(description.plain_text)}</p>
    </ItemDetailDescription>
    </>
  );
};


const ItemDetailContainer = styled.div`
  display:flex;

  .item__image{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    margin-right: 24px;

     img {
      max-width: 680px;
      max-height: 680px;
      border-radius: 4px;
      width: 100%;
      height: auto;
    }
  }

  .item__description {
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    padding: 0 8px 0 8px;

    h2{
      font-size: 48px;
      color: black;
      font-weight: bolder;
      
    }

    h1 {
      font-size: 24px;
      color: black;
      font-weight: bolder;
      text-transform: capitalize;
    }

    p {
      font-size: 20px;
      color: #333;
    }

     button{
      border-radius: 4px;
      border: 1px solid;
      background-color: #3483fa;
      color: white;
      height: auto;
      padding: 0 16px 0 16px;
      padding-top: 12px;
      padding-bottom: 12px;
      margin-right: 16px;
    }
  }



  @media screen and (max-width: 768px) {

  }
`;

const ItemDetailDescription = styled.div`
    display: block;
    margin-bottom: 50px;

    h2 {
      align-self: flex-start;
      color: #333;
      font-size: 24px;
      font-weight: bolder;
      text-transform: capitalize;
    }

    p {
      align-self: flex-start;
      font-size: 14px;
      color: #999;
    }
  

`;

export default ItemDetail;
