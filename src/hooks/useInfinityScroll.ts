import { fetchMovieList } from '@/api/movie';
import { queryKey } from '@/constants/queryKey';
import { useInfiniteQuery } from '@tanstack/react-query';

interface MovieListProps {
  title: string;
  totalResults: number;
  pageParam?: number;
}

export const useInfinityScroll = ({ title, totalResults }: MovieListProps) => {
  return useInfiniteQuery({
    queryKey: [queryKey.MOVIE_LIST, title],
    queryFn: ({ pageParam = 1 }) => fetchMovieList({ title, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (_, allPages) => {
      const nextPage =
        allPages.length * 10 < totalResults ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });
};
