import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import '@/styles/main.scss';

import router from './router/router';

function App() {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
