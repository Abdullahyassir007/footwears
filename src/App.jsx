import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
//This is a github ocmmit contribution check in
//Second check
//Third check
// Components

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import OrderConfirmation from './components/checkout/OrderConfirmation';

// Theme
const theme = {
  colors: {
    primary: '#212121',
    secondary: '#f5f5f5',
    accent: '#ff6b6b',
    text: '#333333',
    light: '#ffffff',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
};

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.secondary};
`;

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <AppContainer>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <ProductList />
                    <Footer />
                  </>
                }
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
            </Routes>
          </AppContainer>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
