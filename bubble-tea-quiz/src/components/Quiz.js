import React, { useEffect, useState } from 'react';
import qQuestions from "../data/QuizQuestions";
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1> Bubble Tea Personality Quiz</h1>
      <h2> {currentQuestion.question}</h2>
      {currentQuestion.options.map((options, index) => (
        <p key={index} onClick={() => handleAnswer(options.flavour)} > {options.text}</p>
      ))}
      {/* {currentQuestionIndex < qQuestions.length && (
        <p> Question {currentQuestionIndex + 1} of {qQuestions.length}</p>
      )} */}
    </div>
  );
};

export default Quiz;
