import Root from '@/components/layout/Root';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Home = React.lazy(() => import('@/components/layout/Home'));
const MovieList = React.lazy(() => import('@/components/movie/MovieList'));
const MovieInfo = React.lazy(() => import('@/components/movie/MovieInfo'));

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
        element: <MovieInfo />,
      },
    ],
  },
]);

export default router;
