import { useNavigate } from 'react-router-dom';
import Search from '@/components/common/Search';
import Theme from '@/components/common/Theme';
import './header.css';
import { useRecoilState } from 'recoil';
import { movieAtom } from '@/atoms/movie';

const Header = () => {
  const navigator = useNavigate();
  const [movieState, setMovieState] = useRecoilState(movieAtom);

  const onMovieListReset = () => {
    setMovieState({
      ...movieState,
      title: '',
      movieList: [],
      page: 1,
      totalResults: 0,
    });
    navigator('/');
  };
  return (
    <header>
      <div className='header-wrap'>
        <h1 onClick={onMovieListReset}>
          <span>MovieTV</span>
        </h1>
        <div className='header-info'>
          <Search />
          <Theme />
        </div>
      </div>
    </header>
  );
};

export default Header;
