import { movieAtom } from '@/atoms/movie';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import Header from '../Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
  const [movieState] = useRecoilState(movieAtom);

  return (
    <div className={`wrapper ${movieState.isDark ? 'dark' : 'light'}`}>
      <Header />
      <Main>
        <div className='main-wrap'>
          <Outlet />
        </div>
      </Main>
    </div>
  );
};

const Main = styled.main`
  padding-top: 80px;
  min-height: 100vh;

  @media (max-width: 380px) {
    padding-top: 120px;
  }
`;

export default Root;
