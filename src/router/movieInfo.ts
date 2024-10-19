import { fetchMovieInfo } from '@/api/movie';
import { queryKey } from '@/constants/queryKey';
import { ResponseValue } from '@/types/movieTypes';
import { QueryClient } from '@tanstack/react-query';
import { LoaderFunctionArgs } from 'react-router-dom';

interface MovieInfoQueryOptionType {
  queryKey: (string | number)[];
  queryFn: () => Promise<ResponseValue>; // 쿼리 함수는 MovieInfo를 반환
}

export const movieInfoQueryOption = (id: string): MovieInfoQueryOptionType => ({
  queryKey: [queryKey.MOVIE_INFO, id],
  queryFn: () => fetchMovieInfo({ id }),
});

export const movieLoader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const { id = '' } = params;
    const query = movieInfoQueryOption(id);

    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery({
        queryKey: query.queryKey,
        queryFn: query.queryFn,
      }))
    );
  };
