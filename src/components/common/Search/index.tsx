import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { movieAtom } from '@/atoms/movie';

import { useInput } from '@/hooks/useInput';
import { FaSearch, FaBackspace } from 'react-icons/fa';

const Search = () => {
  const navigator = useNavigate();
  const { value, setValue, handleInputChange } = useInput();
  const [movieState, setMovieState] = useRecoilState(movieAtom);
  const queryClient = useQueryClient();

  const handleSubmitSearchMovie = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (movieState.title === value) {
      setValue('');
      return;
    }

    queryClient.clear();

    navigator(`movie/${value}`);

    setMovieState({
      ...movieState,
      title: value,
      totalResults: 0,
    });

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
