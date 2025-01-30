import './App.css';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  body {
     background-color: #f7e7b4;
    font-family: "Jua", serif;
    font-weight: 400;
    font-style: normal;
}
  `;
  const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;


function App() {
  return (
<PageContainer>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </PageContainer>
  );
}

export default App;
