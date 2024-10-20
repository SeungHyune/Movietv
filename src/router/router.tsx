import Root from '@/components/layout/Root';
import { QueryClient } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { movieInfoLoader } from './movieInfoLoader';
import Spinner from '@/components/common/Spinner';

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
      },
      {
        path: '/movie/:movieTitle/:id',
        element: (
          <Suspense fallback={<Spinner />}>
            <MovieInfo />
          </Suspense>
        ),
        loader: movieInfoLoader(queryClient),
      },
    ],
  },
]);

export default router;
