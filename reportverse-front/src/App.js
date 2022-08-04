import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import useWindowSize from './hooks/useWindowSize';
import Routes from './router/Routes';

function App() {
  const [width] = useWindowSize();

  const { pathname } = useLocation();

  return (
    <>
      {(width > 768 && !["/", "/register"].includes(pathname)) && <Header/>}
      <Routes/>
    </>
  );
}

export default App;
