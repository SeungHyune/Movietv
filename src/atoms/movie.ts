import { atom } from 'recoil';
import { ResponseValue } from '@/types/movieTypes';
import { getItem } from '@/utils/storage';
import { THEME } from '@/constants/theme';

const defaultData = {
  isDark: getItem(THEME, false),
  title: '',
  totalResults: 0,
  movieInfo: {} as ResponseValue,
};

export const movieAtom = atom({
  key: 'movieState',
  default: defaultData,
});
