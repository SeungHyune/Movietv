import { BrowserRouter } from 'react-router-dom';
import Header from '@/components/layout/Header';
import MovieList from './components/common/movie/MovieList';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MovieList />
    </BrowserRouter>
  );
}

export default App;
