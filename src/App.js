import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';      // Import other components as needed
import Match from "./components/Match"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match" element={<Match />} />
        {/* Add other routes for different sections here */}
      </Routes>
    </Router>
  );
};

export default App;
