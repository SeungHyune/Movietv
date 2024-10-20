import { movieListQueryOption } from '@/router/movieListLoader';
import { MovieResponse } from '@/types/movieTypes';
import { useInfiniteQuery } from '@tanstack/react-query';

export interface MovieListInfiniteData {
  pages: MovieResponse[];
  pageParams: (number | undefined)[];
}

interface MovieListProps {
  title: string;
  initialData: MovieListInfiniteData;
  pageParam?: number;
}

const useInfinityScroll = ({ title, initialData }: MovieListProps) => {
  const { queryKey, queryFn } = movieListQueryOption(title);

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 1,
    initialData,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        Number(lastPage.totalResults) > allPages.length * 10
          ? allPages.length + 1
          : undefined;

      return nextPage;
    },
  });
};

export default useInfinityScroll;
