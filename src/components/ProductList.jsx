import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

// Sample shoe data - replace with actual images
const shoes = [
  {
    id: 1,
    name: 'Air Max 270',
    price: 199.99,
    image: '/images/shoe1.jpg',
  },
  {
    id: 2,
    name: 'Ultra Boost',
    price: 249.99,
    image: '/images/shoe2.jpg',
  },
  {
    id: 3,
    name: 'Jordan 1',
    price: 179.99,
    image: '/images/shoe3.jpg',
  },
  {
    id: 4,
    name: 'Yeezy 350',
    price: 299.99,
    image: '/images/shoe4.jpg',
  },
];

const Section = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.primary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const ProductList = () => {
  return (
    <Section>
      <Title>Featured Products</Title>
      <Grid>
        {shoes.map((shoe) => (
          <ProductCard key={shoe.id} shoe={shoe} />
        ))}
      </Grid>
    </Section>
  );
};

export default ProductList;
