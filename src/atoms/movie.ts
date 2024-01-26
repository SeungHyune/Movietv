import { atom } from 'recoil';
import { MovieInfoResponse, ResponseValue } from '@/types/movieTypes';
import { getItem } from '@/utils/storage';
import { THEME } from '@/constants/theme';

const defaultData = {
  isDark: getItem(THEME, false),
  title: '',
  page: 1,
  movieList: [] as MovieInfoResponse[],
  totalResults: 0,
  movieInfo: {} as ResponseValue,
};

export const movieAtom = atom({
  key: 'movieState',
  default: defaultData,
});
