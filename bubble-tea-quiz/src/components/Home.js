import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
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
`;

const Home = () => {
    const navigate = useNavigate();

    const startQuiz = () => {
        navigate("/quiz");
    };

    return (
        <HomeContainer>
            <h1>Welcome to the Bubble Tea Personality Quiz!</h1>
            <p>Embark on a fun journey in Boba Springs and discover which bubble tea flavor best matches your personality!</p>
            <StyledButton onClick={startQuiz}>Start Quiz</StyledButton>
            <Footer />
        </HomeContainer>
    );
};

export default Home;