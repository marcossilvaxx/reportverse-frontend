import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import useWindowSize from './hooks/useWindowSize';
import LoginPage from './pages/loginPage/loginPageComponent';
import RegisterPage from './pages/registerPage/registerPageComponent';
import Home from './pages/home/Index';
import NewPost from './pages/newPost/index';
import Map from './pages/map/index';

function App() {
  const [width] = useWindowSize();

  return (
    <div>
      {//width > 768 ? <Header /> : null
      }
      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route exact path="/register" element={<RegisterPage/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/postar" element={<NewPost/>} />
        <Route exact path="/mapa" element={<Map/>} />
      </Routes>
    </div>
  );
}

export default App;
