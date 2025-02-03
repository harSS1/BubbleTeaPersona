import React from "react";
import styled from 'styled-components';

const StickyFooter = styled.footer`
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b18f6a;
  color: white;
  text-align: center;
`;

const Footer = () => {
    return (
        <StickyFooter>
            <p>&copy; 2025 Bubble Tea Personality Quiz. Made by Harini Sivasubramanian. All rights reserved.</p>
        </StickyFooter>
    );
}

export default Footer;