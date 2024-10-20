import { useQuery } from '@tanstack/react-query';
import { movieInfoQueryOption } from '@/router/movieInfoLoader';
import { ResponseValue } from '@/types/movieTypes';

interface MovieInfoProps {
  id: string;
  initialData: ResponseValue;
}

const useMovieInfo = ({ id, initialData }: MovieInfoProps) => {
  const { queryKey, queryFn } = movieInfoQueryOption(id);
  return useQuery({
    queryKey,
    queryFn,
    initialData,
  });
};

export default useMovieInfo;
