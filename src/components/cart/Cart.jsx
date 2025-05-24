import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

import { removeFromCart, incrementItem, decrementItem } from '../../store/actions/cartActions';

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 4rem;
  background-color: #f8f9fa;
  border-radius: 10px;
`;

const CartHeader = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CartItem = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ItemImage = styled.div`
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const ItemPrice = styled.p`
  color: ${props => props.theme.colors.accent};
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ItemActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const QuantityControls = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const QuantityButton = styled.button`
  padding: 0.5rem;
  background-color: ${props => props.theme.colors.secondary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const RemoveButton = styled.button`
  padding: 0.5rem;
  background-color: ${props => props.theme.colors.accent};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const CartSummary = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.primary};
`;

const ProceedButton = styled.button`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.accent};
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state);
  const navigate = useNavigate();

  const handleIncrement = (id) => {
    dispatch(incrementItem(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };

  const handleRemove = (id) => {
    const item = cart.items[id];
    if (item) {
      dispatch(removeFromCart(id));
    }
  };

  const handleProceedToCheckout = () => {
    // Check if cart is empty
    if (Object.keys(cart.items).length === 0) {
      alert('Your cart is empty! Please add some items first.');
      return;
    }

    // Navigate to checkout
    navigate('/checkout');
  };

  return (
    <CartContainer>
      <CartHeader>Shopping Cart</CartHeader>

      {Object.keys(cart.items).length === 0 ? (
        <EmptyCart>
          <h2>Your cart is empty</h2>
          <p>Add some items to your cart to proceed to checkout.</p>
          <ProceedButton onClick={() => navigate('/')}>Continue Shopping</ProceedButton>
        </EmptyCart>
      ) : (
        <>
          <CartItems>
            {Object.values(cart.items).map((item) => (
              <CartItem key={item.id}>
                <ItemImage style={{ backgroundImage: `url(${item.image})` }} />
                <ItemDetails>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>${item.price}</ItemPrice>
                  <ItemActions>
                    <QuantityControls>
                      <QuantityButton onClick={() => handleDecrement(item.id)}>
                        <FaMinus />
                      </QuantityButton>
                      <span>{item.quantity}</span>
                      <QuantityButton onClick={() => handleIncrement(item.id)}>
                        <FaPlus />
                      </QuantityButton>
                    </QuantityControls>
                    <RemoveButton onClick={() => handleRemove(item.id)}>
                      <FaTrash />
                    </RemoveButton>
                  </ItemActions>
                </ItemDetails>
              </CartItem>
            ))}
          </CartItems>

          <CartSummary>
            <SummaryItem>
              <span>Total Items</span>
              <span>{Object.values(cart.items).reduce((acc, item) => acc + item.quantity, 0)}</span>
            </SummaryItem>
            <SummaryTotal>
              <span>Total Amount</span>
              <span>${cart.totalAmount.toFixed(2)}</span>
            </SummaryTotal>
            <ProceedButton onClick={handleProceedToCheckout}>
              Proceed to Checkout
            </ProceedButton>
          </CartSummary>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
