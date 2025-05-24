import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const HeaderContainer = styled.div`
  background-color: ${props => props.theme.colors.primary};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const CartIcon = styled(Link)`
  color: white;
  text-decoration: none;
  position: relative;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${props => props.theme.colors.accent};
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
`;

const Header = () => {
  const cart = useSelector(state => state);
  const cartCount = Object.values(cart.items || {}).reduce((acc, item) => acc + (item.quantity || 0), 0);

  return (
    <HeaderContainer>
      <Logo to="/">ShoeStore</Logo>
      <NavLinks>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <CartIcon to="/cart">
          <FaShoppingCart />
          {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
        </CartIcon>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
