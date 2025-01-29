import './App.css';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
     background-color: #f7e7b4;
    font-family: "Jua", serif;
    font-weight: 400;
    font-style: normal;
}
  `;


function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
