import { BrowserRouter } from 'react-router-dom';
import Header from '@/components/layout/Header';
import MovieList from './components/movie/MovieList';
import './styles/main.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MovieList />
    </BrowserRouter>
  );
}

export default App;
