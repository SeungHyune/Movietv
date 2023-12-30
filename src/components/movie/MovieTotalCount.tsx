import { movieAtom } from '@/atoms/movie';
import { useRecoilState } from 'recoil';

const MovieTotalCount = () => {
  const [movieState, setMovieState] = useRecoilState(movieAtom);
  console.log(movieState);
  return <div>카운트 커밋 테스트</div>;
};

export default MovieTotalCount;
