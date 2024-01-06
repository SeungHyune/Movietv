import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Home from '@/components/layout/Home';
import MovieList from '@/components/movie/MovieList';
import MovieInfo from '@/components/movie/MovieInfo';
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
          <Route
            path="/movie/:movieTitle/:id"
            element={<MovieInfo />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
