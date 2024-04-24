import { fetchMovieList } from '@/api/movie';
import { queryKey } from '@/constants/queryKey';
import { useInfiniteQuery } from '@tanstack/react-query';

interface MovieListProps {
  title: string;
  pageParam?: number;
}

export const useInfinityScroll = ({ title }: MovieListProps) => {
  return useInfiniteQuery({
    queryKey: [queryKey.MOVIE_LIST, title],
    queryFn: ({ pageParam = 1 }) => fetchMovieList({ title, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        Number(lastPage.totalResults) > allPages.length * 10
          ? allPages.length + 1
          : undefined;

      return nextPage;
    },
  });
};
