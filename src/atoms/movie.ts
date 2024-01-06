import { atom } from 'recoil';
import { MovieInfoResponse, ResponseValue } from '@/types/movieTypes';

const defaultData = {
  isTheme: false,
  title: '',
  page: 1,
  movieList: [] as MovieInfoResponse[],
  totalResults: 0,
  movieInfo: {} as ResponseValue
};

export const movieAtom = atom({
  key: 'movieState',
  default: defaultData
});
