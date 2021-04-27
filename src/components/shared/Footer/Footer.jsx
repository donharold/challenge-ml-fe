import React from 'react';
import styled from 'styled-components';

const Footer = () => <FooterContent  >Copyright © 1999-2021 MercadoLibre Colombia LTDA. </FooterContent>;

const FooterContent = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    text-align: center;
`;

export default Footer;
