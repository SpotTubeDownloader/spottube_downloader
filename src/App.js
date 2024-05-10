import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Login from './page/Login';
import Home from './page/Home';
import "primereact/resources/themes/lara-light-teal/theme.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <Router>
            <Routes> 
              <Route path="/" element={<Login />} /> 
              <Route path="/home" element={<Home />} /> 
            </Routes>
    </Router>
  );
}

export default App;
