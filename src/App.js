import ProbabilityResult from "./Views/ProbabilityResult";
import PredictionForm from "./Views/PredictionForm";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

function App() {
  
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<PredictionForm/>}></Route>
            <Route path="/prediction" element={<ProbabilityResult/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;