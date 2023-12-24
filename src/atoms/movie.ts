import { atom } from 'recoil';
import { MovieInfoResponse } from '@/types/movieTypes';

const defaultData = {
  isTheme: false,
  title: '',
  page: 1,
  movieList: [] as MovieInfoResponse[]
};

export const movieAtom = atom({
  key: 'movieState',
  default: defaultData
});
