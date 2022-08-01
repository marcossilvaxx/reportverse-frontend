import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import useWindowSize from './hooks/useWindowSize';
import Routes from './router/Routes';

function App() {
  const [width] = useWindowSize();

  return (
    <BrowserRouter>
      <Header showHeader={width > 768} />
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
