import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledButton = styled.button`
  background-color:#5cb5a0;
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

const StyledParagraph = styled.p`
  max-width: 80%; 
  line-height: 1.6;
  word-wrap: break-word;
`;

const Home = () => {

  return (
    <HomeContainer>
      <h1>Welcome to the Bubble Tea Personality Quiz!</h1>
      <StyledParagraph>Embark on a fun journey in Boba Springs and discover which bubble tea flavor best matches your personality!</StyledParagraph>
      <Link to="/quiz"><StyledButton>Start Quiz</StyledButton> </Link>
    </HomeContainer>
  );
};

export default Home;