import Root from '@/components/layout/Root';
import { QueryClient } from '@tanstack/react-query';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { movieInfoLoader } from './movieInfoLoader';

import { movieListLoader } from './movieListLoader';

const Home = React.lazy(() => import('@/components/layout/Home'));
const MovieList = React.lazy(() => import('@/components/movie/MovieList'));
const MovieInfo = React.lazy(() => import('@/components/movie/MovieInfo'));

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/movie/:movieTitle',
        element: <MovieList />,
        loader: movieListLoader(queryClient),
      },
      {
        path: '/movie/:movieTitle/:id',
        element: <MovieInfo />,
        loader: movieInfoLoader(queryClient),
      },
    ],
  },
]);

export default router;
