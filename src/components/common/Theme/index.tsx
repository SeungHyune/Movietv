import { useRecoilState } from 'recoil';
import { movieAtom } from '@/atoms/movie';

const Theme = () => {
  const [movieState, setMovieState] = useRecoilState(movieAtom);

  const onThemeChange = () => {
    setMovieState({
      isTheme: !movieState.isTheme
    });
  };

  return (
    <button onClick={onThemeChange}>
      {movieState.isTheme ? '밝게' : '어둡게'}
    </button>
  );
};

export default Theme;
