import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 4rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ColumnTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const Links = styled.ul`
  list-style: none;
  padding: 0;
`;

const Link = styled.li`
  margin-bottom: 0.8rem;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const Icon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <div>
            <ColumnTitle>Company</ColumnTitle>
            <Links>
              <Link>About Us</Link>
              <Link>Contact</Link>
              <Link>Blog</Link>
              <Link>Careers</Link>
            </Links>
          </div>
          <div>
            <ColumnTitle>Support</ColumnTitle>
            <Links>
              <Link>Help Center</Link>
              <Link>Shipping</Link>
              <Link>Returns</Link>
              <Link>FAQ</Link>
            </Links>
          </div>
          <div>
            <ColumnTitle>Contact</ColumnTitle>
            <Links>
              <Link>Email: info@shoestore.com</Link>
              <Link>Phone: (555) 123-4567</Link>
              <Link>Address: 123 Shoe Street</Link>
            </Links>
            <SocialIcons>
              <Icon><FaFacebook /></Icon>
              <Icon><FaTwitter /></Icon>
              <Icon><FaInstagram /></Icon>
              <Icon><FaLinkedin /></Icon>
            </SocialIcons>
          </div>
        </FooterGrid>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p>&copy; {new Date().getFullYear()} ShoeStore. All rights reserved.</p>
        </div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
