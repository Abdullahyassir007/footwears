import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
const CheckoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  gap: 2rem;
`;

const EmptyCartMessage = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin: 2rem auto;
  width: 80%;
`;

const CheckoutHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const Checkout = () => {
  const cart = useSelector(state => state);
  const navigate = useNavigate();

  // If cart is empty, show message and redirect
  if (Object.keys(cart.items).length === 0) {
    return (
      <EmptyCartMessage>
        <h2>Your cart is empty!</h2>
        <p>Please add some items to your cart before proceeding to checkout.</p>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '1rem',
          }}
        >
          Continue Shopping
        </button>
      </EmptyCartMessage>
    );
  }

  return (
    <CheckoutContainer>
      <CheckoutHeader>Checkout</CheckoutHeader>
      <CheckoutForm cart={cart} />
    </CheckoutContainer>
  );
};

export default Checkout;
