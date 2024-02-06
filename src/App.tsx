import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { movieAtom } from './atoms/movie';
import styled from '@emotion/styled';
import '@/styles/main.scss';
import Header from '@/components/layout/Header';
import Home from '@/components/layout/Home';
import MovieList from '@/components/movie/MovieList';
import MovieInfo from '@/components/movie/MovieInfo';

function App() {
  const [movieState] = useRecoilState(movieAtom);
  return (
    <BrowserRouter>
      <div className={`wrapper ${movieState.isDark ? 'dark' : 'light'}`}>
        <Header />
        <Main>
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
        </Main>
      </div>
    </BrowserRouter>
  );
}

const Main = styled.main`
  padding-top: 80px;
  min-height: 100vh;

  @media (max-width: 380px) {
    padding-top: 120px;
  }
`;

export default App;
