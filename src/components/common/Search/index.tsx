import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { movieAtom } from '@/atoms/movie';

import { useInput } from '@/hooks/useInput';
import { fetchMovieList } from '@/api/movie';
import { FaSearch, FaBackspace } from 'react-icons/fa';

const Search = () => {
  const navigator = useNavigate();
  const { value, setValue, handleInputChange } = useInput();
  const [movieState, setMovieState] = useRecoilState(movieAtom);
  const queryClient = useQueryClient();

  const handleSubmitSearchMovie = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (movieState.title === value) return;
    queryClient.clear();
    const res = await fetchMovieList({ title: value });
    navigator(`movie/${value}`);

    const { Search, totalResults } = res;

    if (Search) {
      setMovieState({
        ...movieState,
        movieList: [...Search],
        title: value,
        page: 2,
        totalResults: Number(totalResults),
      });
    } else {
      setMovieState({
        ...movieState,
        movieList: [],
        page: 1,
        title: value,
        totalResults: 0,
      });
    }

    setValue('');
  };

  const handleRemoveSearchText = () => {
    setValue('');
  };

  return (
    <form onSubmit={handleSubmitSearchMovie}>
      <div className='search'>
        <input
          type='text'
          placeholder='검색어를 입력해주세요.'
          value={value}
          onChange={handleInputChange}
        />
        {value !== '' && (
          <FaBackspace
            style={{ cursor: 'pointer' }}
            onClick={handleRemoveSearchText}
          />
        )}
      </div>
      <button>
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
