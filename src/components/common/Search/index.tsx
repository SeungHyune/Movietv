import { useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');

  const onSubmitSearchMovie = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onSearchMovieTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    setSearch(event.currentTarget.value);
  };

  return (
    <form onSubmit={onSubmitSearchMovie}>
      <input
        type="text"
        value={search}
        onChange={onSearchMovieTitle}
      />
      <button>검색</button>
    </form>
  );
};

export default Search;
