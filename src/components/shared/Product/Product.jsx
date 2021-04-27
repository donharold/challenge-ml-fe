import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getPriceText } from '../../../utils/helpers';
import shippingImg from '../../../assets/images/ic_shipping.png';


const Card = ({
  id,
  title,
  thumbnail,
  price,
  address,
  shipping,
  currency,
  handleClick,
}) => {
  const { state_name: stateName } = address;
  const { free_shipping: freeShipping } = shipping;
  const priceText = getPriceText(currency, price);
  return (
    <ProductContainer
      onClick={() => handleClick(id)}
      role="button"
    >
      <div className="product__image">
        <img src={thumbnail} alt={id} />
      </div>
      <div className="product__description">
        <h2>
          {priceText}
          {freeShipping && <img src={shippingImg} alt="Shipping" />}
        </h2>
        <p >{title}</p>
      </div>
      <div className="product__location">{stateName}</div>
    </ProductContainer>
  );
};

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  address: PropTypes.object.isRequired, 
  shipping: PropTypes.object.isRequired, 
  currency: PropTypes.string,
};

Card.defaultProps = {
  currency: '$',
};

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns:  196px 2fr 1fr;
  grid-template-rows: minmax(200px, 200px);
  grid-template-areas: "photo description location";
  padding: 20px;
  background-color: white;
  cursor: pointer;
  position: relative;

  .product__image {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: photo;

    img {
      max-width: 196px;
      max-height: 196px;
      border-radius: 4px;
      width: auto;
      height: auto;
    }
  }

  .product__description {
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    padding: 0 8px;
    grid-area: description;
    

    h2 {
      display: inline;
      font-size: 24px;

      img {
        padding-left: 8px;
      }
    }

    p {
      font-size: 18px;
      color: #333;
    }
  }

  .product__location {
    display: flex;
    justify-content: flex-start;
    padding: 32px 8px;
    font-size: 20px;
    color: #666;
    grid-area: location;
    
  }

  @media screen and (max-width: 768px) {
    & {
      grid-template-areas:
        "photo description description"
        "photo location location";
    }
  }

  @media screen and (max-width: 320px) {
    & {
      grid-template-areas:
        "photo photo photo"
        "description description description"
        "location location location";
    }

    .product__description  {
      justify-content: center;
      flex-flow: wrap;
    }

    .product__location  {
      display: none;
    }
  }

  &:after {
    content: "";
    position: absolute;
    height: 1px;
    width: 95%;
    border-bottom: 1px solid #f0f0f0;
    margin: 0 auto;
    margin-left: 2.5%;
    max-width: 960px;
    bottom: 0;
    left: 0;
}

`;
export default Card;
