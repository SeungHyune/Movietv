import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import '@/styles/main.scss';

import router from './router/router';
import Spinner from './components/common/Spinner';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
