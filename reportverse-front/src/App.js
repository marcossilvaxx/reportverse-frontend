import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';
import Header from './components/Header';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const [width,] = useWindowSize();

  return (
    <BrowserRouter>
      <Header showHeader={width > 768} />
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
