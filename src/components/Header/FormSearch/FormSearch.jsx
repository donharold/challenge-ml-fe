import React from 'react';
import searchIcon from '../../../assets/images/ic_Search.png';
import styled from 'styled-components';


const FormSearch = ({handleSearch, setSearch, search}) => {


  return (
    
        <Form role="search">
          <input
            type="text"
            name="search"
            className="input"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onBlur={handleSearch}
            placeholder="Buscar productos, marcas y más…"
            maxLength="100"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck="false"
            autoComplete="off"
          />
          <button
            type="submit"
            className="btn"
            onClick={handleSearch}
          >

          
            <img
              src={searchIcon}
              className="btn__icon"
              alt="Search-Icon"
            />
          </button>
        </Form>
  );
};

const Form = styled.form`
      position: relative;
      width: 100%;
    .input {
      border-radius: 8px;
      border: 0 rgba(0, 0, 0, 0.2);
      padding: 8px 0 8px 8px;
      max-width: 95%;
      width: 100%;
      font-size: 18px !important;
    }

    .btn {
      position: absolute;
      border-radius: 0 2px 2px 0;
      border: 0 rgba(0, 0, 0, 0.2);
      background-color: #eee;
      max-width: 5%;
      width: 100%;
      border-left: 1px solid #eee;

      .icon {
        font-size: 16;
        line-height: 24;
      }
    }

    @media (max-width: 320px), (max-width: 576px) {
      .input {
        max-width: 100%;
      }
      .btn {
        display: none;
      }
    }

    @media (max-width: 576px), (max-width: 768px) {
      .input {
        max-width: 90%;
      }
      .btn {
        max-width: 10%;
      }
    }
`
export default FormSearch;
