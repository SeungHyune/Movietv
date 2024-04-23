import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { movieAtom } from '@/atoms/movie';
import styled from '@emotion/styled';
import Search from '@/components/common/Search';
import Theme from '@/components/common/Theme';

const Header = () => {
  const navigator = useNavigate();
  const [movieState, setMovieState] = useRecoilState(movieAtom);

  const onMovieListReset = () => {
    setMovieState({
      ...movieState,
      title: '',
      movieList: [],
      totalResults: 0,
    });
    navigator('/');
  };
  return (
    <HeaderContainer>
      <div className='header-wrap'>
        <h1 onClick={onMovieListReset}>
          <span>MovieTV</span>
        </h1>
        <div className='header-info'>
          <Search />
          <Theme />
        </div>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f1f1f1;
  box-shadow: #959da533 0 8px 24px;
  z-index: 100;

  @media (max-width: 1400px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }

  .header-wrap {
    max-width: 1400px;
    width: 100%;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    cursor: pointer;
    font-weight: 700;
    font-family:
      Bebas Neue,
      sans-serif;
    font-size: 38px;

    span {
      background: linear-gradient(to right, #ff0000, #333);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .header-info {
    display: flex;
    align-items: center;

    form {
      display: flex;
      margin-right: 10px;

      @media (max-width: 380px) {
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
      }

      .search {
        width: 300px;
        height: 40px;
        background-color: #fff;
        padding: 0 10px;
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        input {
          width: calc(100% - 24px);
          outline: none;
          border: 0;
        }
      }

      @media (max-width: 540px) {
        width: 160px;
      }

      @media (max-width: 380px) {
        width: calc(100% - 40px);
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background: #e13232;

        svg {
          color: white;
        }
      }
    }
  }
`;

export default Header;
