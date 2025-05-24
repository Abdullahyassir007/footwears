import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.div`
  width: 100%;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e54b4b;
  }
`;

const OrderSummary = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

const CheckoutForm = ({ cart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.address) {
      alert('Please fill in all required fields');
      return;
    }

    // Simulate payment processing
    setTimeout(() => {
      // Clear cart
      dispatch({ type: 'CLEAR_CART' });
      
      // Navigate to order confirmation
      navigate('/order-confirmation');
    }, 1000);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="expiry"
            placeholder="Expiry (MM/YY)"
            value={formData.expiry}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="cvc"
            placeholder="CVC"
            value={formData.cvc}
            onChange={handleChange}
            required
          />
        </div>
        <OrderSummary>
          <h3>Order Summary</h3>
          <Item>
            <span>Items</span>
            <span>{Object.values(cart.items || {}).reduce((acc, item) => acc + (item.quantity || 0), 0)}</span>
          </Item>
          <Item>
            <span>Total Amount</span>
            <span>${(cart.totalAmount || 0).toFixed(2)}</span>
          </Item>
        </OrderSummary>
        <Button type="submit">Complete Order</Button>
      </Form>
    </FormContainer>
  );
};

export default CheckoutForm;
