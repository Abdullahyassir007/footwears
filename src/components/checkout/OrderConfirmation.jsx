import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const SuccessMessage = styled.div`
  background-color: #f8f9fa;
  padding: 3rem;
  border-radius: 8px;
  margin: 2rem auto;
  width: 80%;
`;

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <SuccessMessage>
        <h2>Thank you for your order!</h2>
        <p>Your order has been successfully placed.</p>
        <p>We will notify you when your order is shipped.</p>
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
      </SuccessMessage>
    </Container>
  );
};

export default OrderConfirmation;
