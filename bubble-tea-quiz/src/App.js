import './App.css';
import Quiz from './components/Quiz';
import Results from './components/Results';
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
