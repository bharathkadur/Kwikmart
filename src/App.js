import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage'; 
import AddUserPage from './Components/AddUserPage';
import Home from './Components/mainPage/Home'; // Updated import path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/AddUser" element={<AddUserPage />} />
        <Route path="/Home" element={<Home />} /> {/* Updated JSX syntax */}
      </Routes>
    </Router>
  );
}

export default App;
