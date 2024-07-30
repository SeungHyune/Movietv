import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { movieAtom } from '@/atoms/movie';

import { useInput } from '@/hooks';
import { FaSearch, FaBackspace } from 'react-icons/fa';

const Search = () => {
  const navigator = useNavigate();
  const { value, setValue, handleInputChange } = useInput();
  const [movieState, setMovieState] = useRecoilState(movieAtom);

  const handleSubmitSearchMovie = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (movieState.title === value) {
      setValue('');
      return;
    }

    navigator(`movie/${value}`);

    setMovieState({
      ...movieState,
      title: value,
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
