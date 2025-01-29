import React, { useEffect, useState } from 'react';
import qQuestions from "../data/QuizQuestions";
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const QuestionBox = styled.div`
  padding: 40px;
  // border-radius: 10px;
  // box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  // border: 2px solid #ddd;
  // background-color:rgb(247, 240, 218);
`;

const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const QuestionCount = styled.div`
  margin-top: 20px;
  text-align: left;
  font-size: 1rem;
  color: #555;
`;

const OptionItem = styled.p`
  padding: 10px;
  margin: 10px 0;
  background-color: #f1f1f1;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #68c4af;
  }
`;

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({
    "Matcha": 0,
    "Black Tea": 0,
    "Mango": 0,
    "Thai Milk": 0,
    "Brown Sugar": 0,
    "Taro": 0,
  });

  const navigate = useNavigate();

  const handleAnswer = (flavour) => {
    setAnswers({ ...answers, [flavour]: answers[flavour] + 1 });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  useEffect(() => {
    if (currentQuestionIndex === qQuestions.length) {
      navigate('/results', { state: { flavours: answers } });
    }
  }, [currentQuestionIndex, navigate, answers]);

  if (currentQuestionIndex === qQuestions.length) {
    return null;
  }

  const currentQuestion = qQuestions[currentQuestionIndex];

  return (
    <QuizContainer>
      <h1>Bubble Tea Personality Quiz</h1>
      <QuestionBox>
        <QuestionWrapper>
          <h2>{currentQuestion.question}</h2>
        </QuestionWrapper>
        {currentQuestion.options.map((option, index) => (
          <OptionItem key={index} onClick={() => handleAnswer(option.flavour)}>
            {option.text}
          </OptionItem>
        ))}
          <QuestionCount>
          Question {currentQuestionIndex + 1} of {qQuestions.length}
        </QuestionCount>
      </QuestionBox>
      <Footer />
    </QuizContainer>
  );
};

export default Quiz;
