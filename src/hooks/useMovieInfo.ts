import { useQuery } from '@tanstack/react-query';
import { fetchMovieInfo } from '@/api/movie';
import { queryKey } from '@/constants/queryKey';

interface MovieInfoProps {
  id: string;
}

export const useMovieInfo = ({ id }: MovieInfoProps) => {
  return useQuery({
    queryKey: [queryKey.MOVIE_INFO, id],
    queryFn: () => fetchMovieInfo({ id }),
  });
};
