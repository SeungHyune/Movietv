import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Home from '@/components/layout/Home';
import MovieList from './components/movie/MovieList';
import './styles/main.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/movie/:movieTitle"
            element={<MovieList />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
