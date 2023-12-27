import { useRecoilState } from 'recoil';
import { movieAtom } from '@/atoms/movie';
import styled from '@emotion/styled';

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
      isTheme: !movieState.isTheme
    });
  };

  return (
    <ButtonTheme onClick={onThemeChange}>
      <img
        src={
          movieState.isTheme
            ? 'https://github.com/SeungHyune/vue-movie/blob/main/image/theme/light-icon.png?raw=true'
            : 'https://github.com/SeungHyune/vue-movie/blob/main/image/theme/dark-icon.png?raw=true'
        }
      />
    </ButtonTheme>
  );
};

export default Theme;
