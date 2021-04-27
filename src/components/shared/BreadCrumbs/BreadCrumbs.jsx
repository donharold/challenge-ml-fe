import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BreadCrumbs = ({ categories, delimiter }) => {
  const renderBreadcrumb = (categoryList, delimiterText) => {
    const navigationListLength = categoryList.length;
    return categoryList.map((element, index) => {
      const { id, name = 'Name', url = '/' } = element;
      return (
        <Fragment key={id}>
          <li>
            <Link to={url}>{name}</Link>
          </li>
          <li className="delimiter">
            {index < navigationListLength - 1 ? delimiterText : null}
          </li>
        </Fragment>
      );
    });
  };

  return (
    <BreadCrumbContainer  aria-label="breadcrumb">
      <ol >
        {renderBreadcrumb(categories, delimiter)}
      </ol>
    </BreadCrumbContainer>
  );
};

BreadCrumbs.propTypes = {
  categories: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  delimiter: PropTypes.string,
};

BreadCrumbs.defaultProps = {
  delimiter: '>',
};

const BreadCrumbContainer = styled.nav`
    height: 24px;
    font-size: 16px !important;
    margin: 0 auto;
    max-width: 980px;
    padding: 20px 0;

   ol {
     margin: 0;
     display: flex;
     padding: 0;
     flex-wrap: wrap;
     list-style: none;
     align-items: center;
     grid-column: 2 / 4;

    li {
      margin-right: 8px;
      a {
        text-decoration: none;
        color: #666;

        &:hover {
          text-decoration: underline;
        }
      }
      .delimiter {
        display: flex;
        margin-left: 8px;
        user-select: none;
      }
    }
  }


`;

export default BreadCrumbs;
