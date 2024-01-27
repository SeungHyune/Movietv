import { useRecoilState } from 'recoil';
import { movieAtom } from '@/atoms/movie';
import styled from '@emotion/styled';

const MovieTotalResult = () => {
  const [movieState] = useRecoilState(movieAtom);
  const { title, totalResults } = movieState;

  return (
    <MovieTotalResultContainer>
      <h3>{title}</h3>
      <span>총 {totalResults}건 검색</span>
    </MovieTotalResultContainer>
  );
};

const MovieTotalResultContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 10px;

  h3 {
    font-family:
      Bebas Neue,
      sans-serif;
    color: #e13232;
    font-size: 30px;
    line-height: 30px;
    font-weight: 700;
  }

  span {
    font-size: 20px;
    font-family:
      Noto Sans KR,
      sans-serif;
    letter-spacing: -1.5px;
    padding-left: 5px;
    font-weight: 600;
  }
`;

export default MovieTotalResult;
