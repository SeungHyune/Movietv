import { fetchMovieList } from '@/api/movie';
import { movieAtom } from '@/atoms/movie';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

interface MovieListProps {
  title: string;
  pageParam?: number;
}

export const useInfinityScroll = ({ title }: MovieListProps) => {
  const [movieState] = useRecoilState(movieAtom);
  return useInfiniteQuery({
    queryKey: ['movielist'],
    queryFn: ({ pageParam = 1 }) => fetchMovieList({ title, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        allPages.length * 10 < movieState.totalResults
          ? allPages.length + 1
          : undefined;
      return nextPage;
    },
  });
};
