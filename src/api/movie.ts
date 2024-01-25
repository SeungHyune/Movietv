import { MovieResponse, ResponseValue } from '@/types/movieTypes';
import apiClient from './apiClient';
import { API_KEY } from './config';

interface MovieInfoProps {
  id: string;
}

export const fetchMovieInfo = async ({ id }: MovieInfoProps): Promise<ResponseValue> => {
  try {
    const response: ResponseValue = await apiClient
      .get('', { params: { apikey: API_KEY, i: id } })
      .then((res) => res.data);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

interface MovieListProps {
  title: string;
  page?: number;
}

export const fetchMovieList = async ({
  title,
  page = 1
}: MovieListProps): Promise<MovieResponse> => {
  try {
    const response: MovieResponse = await apiClient
      .get('', {
        params: { apikey: API_KEY, s: title, page }
      })
      .then((res) => res.data);

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
