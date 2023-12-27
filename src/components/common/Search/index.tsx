import { movieAtom } from '@/atoms/movie';
import { useRecoilState } from 'recoil';
import { useInput } from '@/hooks/useInput';
import { fetchMovieList } from '../../../api/movieSearch';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const { value, onInputChange } = useInput();
  const [movieState, setMovieState] = useRecoilState(movieAtom);

  const onSubmitSearchMovie = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (movieState.title === value) return;

    const res = await fetchMovieList(value);
    const { Search } = res;

    if (Search) {
      setMovieState({
        ...movieState,
        movieList: [...Search],
        title: value,
        page: movieState.page + 1
      });
    } else {
      setMovieState({
        ...movieState,
        movieList: [],
        page: 1,
        title: value
      });
    }
  };

  return (
    <form onSubmit={onSubmitSearchMovie}>
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        value={value}
        onChange={onInputChange}
      />
      <button>
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
