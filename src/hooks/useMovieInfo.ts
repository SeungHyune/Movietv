import { useQuery } from '@tanstack/react-query';
import { fetchMovieInfo } from '@/api/movie';

interface MovieInfoProps {
  id: string;
}

export const useMovieInfo = ({ id }: MovieInfoProps) => {
  return useQuery({
    queryKey: ['movieinfo'],
    queryFn: () => fetchMovieInfo({ id }),
  });
};
