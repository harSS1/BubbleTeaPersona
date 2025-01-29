import React from "react";
import styled from 'styled-components';

const StickyFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #68c4af;  
  color: white;
  text-align: center;
  padding: 10px;
  z-index: 1000;
`;

const Footer = () => {
    return (
        <StickyFooter>
            <p>&copy; 2025 Bubble Tea Personality Quiz. Made by Harini Sivasubramanian. All rights reserved.</p>
        </StickyFooter>
    );
}

export default Footer;