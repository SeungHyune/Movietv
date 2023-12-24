import { useState } from 'react';

export const useInput = () => {
  const [value, setValue] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, onInputChange };
};
