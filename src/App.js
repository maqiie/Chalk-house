// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';      // Import other components as needed
// import Match from "./components/Match"
// import FloatingAd from './components/Floating';
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/match" element={<Match />} />
//         {/* Add other routes for different sections here */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Match from './components/Match';
import FloatingAd from './components/Floating';
import "./App.css"

const App = () => {
  const location = useLocation();

  // Optionally, control the floating ad's visibility based on the current route
  const shouldShowAd = location.pathname !== '/match'; // Hide ad on '/match' route

  return (
    <div>
      {/* Conditionally render FloatingAd based on the route */}
      {shouldShowAd && <FloatingAd />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match" element={<Match />} />
        {/* Add other routes here */}
      </Routes>
    </div>
  );
};

const RootApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default RootApp;
