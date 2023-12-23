import { atom } from 'recoil';

const defaultData = {
  isTheme: false
};

export const movieAtom = atom({
  key: 'movieState',
  default: defaultData
});
