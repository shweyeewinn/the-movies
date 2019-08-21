import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header';
import { Container } from 'react-bootstrap';

const propTypes = {
  children: PropTypes.object.isRequired
};

const theme = {
  black: '#292929',
  darkGrey: '#dddddd',
  lightGrey: '#aaaaaa',
  white: '#ffffff',
  pink: '#f83958',
  darkPink: '#e72746',
  maxWidth: '1740px',
  fontFamily: 'Roboto',
  fontWeight: 700
};

const StyledPage = styled.div`
  color: ${props => props.theme.black};
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Header />
      <Container>{children}</Container>
    </StyledPage>
  </ThemeProvider>
);

Layout.propTypes = propTypes;

export default Layout;
