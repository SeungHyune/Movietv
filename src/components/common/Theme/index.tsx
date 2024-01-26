import { useRecoilState } from 'recoil';
import { movieAtom } from '@/atoms/movie';
import styled from '@emotion/styled';
import { setItem } from '@/utils/storage';
import { THEME } from '@/constants/theme';

const ButtonTheme = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #0000000d;
  border-radius: 50%;

  & img {
    width: 16px;
    height: 16px;
    transition: transform 0.2s;

    &:hover {
      transform: rotate(180deg);
    }
  }
`;

const Theme = () => {
  const [movieState, setMovieState] = useRecoilState(movieAtom);

  const onThemeChange = () => {
    setMovieState({
      ...movieState,
      isDark: !movieState.isDark,
    });

    setItem(THEME, movieState.isDark);
  };

  return (
    <ButtonTheme onClick={onThemeChange}>
      <img
        src={
          movieState.isDark ? '/assets/light-icon.png' : '/assets/dark-icon.png'
        }
      />
    </ButtonTheme>
  );
};

export default Theme;
