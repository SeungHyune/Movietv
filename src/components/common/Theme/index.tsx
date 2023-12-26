import { useRecoilState } from 'recoil';
import { movieAtom } from '@/atoms/movie';

const Theme = () => {
  const [movieState, setMovieState] = useRecoilState(movieAtom);

  const onThemeChange = () => {
    setMovieState({
      ...movieState,
      isTheme: !movieState.isTheme
    });
  };

  return (
    <button onClick={onThemeChange}>
      <img
        src={
          movieState.isTheme
            ? 'https://github.com/SeungHyune/vue-movie/blob/main/image/theme/light-icon.png?raw=true'
            : 'https://github.com/SeungHyune/vue-movie/blob/main/image/theme/dark-icon.png?raw=true'
        }
      />
    </button>
  );
};

export default Theme;
