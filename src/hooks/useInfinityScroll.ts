import { fetchMovieList } from '@/api/movie';
import { movieAtom } from '@/atoms/movie';
import { queryKey } from '@/constants/queryKey';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

interface MovieListProps {
  title: string;
  pageParam?: number;
}

export const useInfinityScroll = ({ title }: MovieListProps) => {
  const [movieState] = useRecoilState(movieAtom);
  return useInfiniteQuery({
    queryKey: [queryKey.MOVIE_LIST, title],
    queryFn: ({ pageParam = 1 }) => fetchMovieList({ title, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (_, allPages) => {
      const nextPage =
        allPages.length * 10 < movieState.totalResults
          ? allPages.length + 1
          : undefined;
      return nextPage;
    },
  });
};
