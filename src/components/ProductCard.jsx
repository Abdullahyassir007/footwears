import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';

const Card = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  margin: 1rem;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.primary};
`;

const Price = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 1rem;
`;

const AddToCart = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: ${props => props.theme.colors.accent};
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

const ProductCard = ({ shoe }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(shoe, 1));
    console.log('Added to cart:', shoe.name);
  };

  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ImageContainer style={{ backgroundImage: `url(${shoe.image})` }} />
      <Content>
        <Title>{shoe.name}</Title>
        <Price>${shoe.price}</Price>
        <AddToCart onClick={handleAddToCart}>Add to Cart</AddToCart>
      </Content>
    </Card>
  );
};

export default ProductCard;
