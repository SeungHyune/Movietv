import { useRecoilState } from 'recoil';
import { movieAtom } from '@/atoms/movie';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

const MovieTotalResult = () => {
  const { movieTitle } = useParams();
  const [movieState] = useRecoilState(movieAtom);
  const { totalResults } = movieState;

  return (
    <MovieTotalResultContainer>
      <div>
        <h3>{movieTitle}</h3>
        <span>총 {totalResults}건 검색</span>
      </div>
      {totalResults === 0 && (
        <MovieSearchResults>검색 결과가 없습니다.</MovieSearchResults>
      )}
    </MovieTotalResultContainer>
  );
};

const MovieTotalResultContainer = styled.div`
  div {
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
  }

  @media (max-width: 380px) {
    & > div > h3 {
      font-size: 24px;
    }
    & > div > span {
      font-size: 16px;
    }
  }
`;

const MovieSearchResults = styled.div`
  padding-top: 50px;
  justify-content: center;

  @media (max-width: 380px) {
    font-size: 14px;
  }
`;

export default MovieTotalResult;
