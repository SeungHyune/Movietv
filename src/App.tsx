import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { movieAtom } from './atoms/movie';
import Header from '@/components/layout/Header';
import Home from '@/components/layout/Home';
import MovieList from '@/components/movie/MovieList';
import MovieInfo from '@/components/movie/MovieInfo';
import '@/styles/main.scss';

function App() {
  const [movieState] = useRecoilState(movieAtom);
  return (
    <BrowserRouter>
      <div className={`wrapper ${movieState.isDark ? 'dark' : 'light'}`}>
        <Header />
        <main>
          <div className='main-wrap'>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/movie/:movieTitle'
                element={<MovieList />}
              />
              <Route
                path='/movie/:movieTitle/:id'
                element={<MovieInfo />}
              />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
