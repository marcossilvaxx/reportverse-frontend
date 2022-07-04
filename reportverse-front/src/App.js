import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage/loginPageComponent';
import RegisterPage from './pages/registerPage/registerPageComponent';

function App() {
  return (
    <div>
       <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route exact path="/register" element={<RegisterPage/>} />
      </Routes>
    </div>
  );
}

export default App;
