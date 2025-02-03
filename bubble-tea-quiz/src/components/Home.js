import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const HomeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const StyledButton = styled.button`
  background-color:#b18f6a;
  color: white;
  font-size: 1.2rem;
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
  
  a {
        text-decoration: none;
        color: inherit;
    }
`;

const StyledHeading = styled.h1`
  margin-bottom: 15px;
`;

const StyledParagraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
`;

const Home = () => {

  return (
    <HomeContainer>
      <StyledHeading> Welcome to the Bubble Tea Personality Quiz!</StyledHeading>
      <StyledParagraph>Embark on a fun journey in Boba Springs and discover which bubble tea flavor best matches your personality!</StyledParagraph>
      <Link to="/quiz"><StyledButton>Start Quiz</StyledButton> </Link>
    </HomeContainer>
  );
};

export default Home;