import { movieAtom } from '@/atoms/movie';
import { useRecoilState } from 'recoil';
import { useInput } from '@/hooks/useInput';
import { fetchMovieList } from '../../../api/movieSearch';

const Search = () => {
  const { value, onInputChange } = useInput();
  const [movieState, setMovieState] = useRecoilState(movieAtom);

  const onSubmitSearchMovie = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMovieState({
      ...movieState,
      title: value
    });

    const res = await fetchMovieList(value);
    console.log(res);
    const { Search } = res;
    setMovieState({
      ...movieState,
      movieList: [...movieState.movieList, ...Search]
    });
  };

  return (
    <form onSubmit={onSubmitSearchMovie}>
      <input
        type="text"
        value={value}
        onChange={onInputChange}
      />
      <button>검색</button>
    </form>
  );
};

export default Search;
