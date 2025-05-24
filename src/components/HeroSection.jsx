import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled(motion.div)`
  position: relative;
  height: 80vh;
  min-height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 2rem;

  @media (max-width: 768px) {
    height: 60px;
    min-height: 400px;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ShopButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: ${props => props.theme.colors.accent};
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroContent>
        <HeroTitle>Discover Your Perfect Fit</HeroTitle>
        <HeroSubtitle>Experience the comfort of premium footwear</HeroSubtitle>
        <ShopButton>Shop Now</ShopButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
