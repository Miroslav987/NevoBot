import { Suspense, lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '@app';

import { RouterPath } from '@shared/routing/path';
import { RequireAuth } from '@shared/lib/guards/RequireAuth';
import Loading from '@shared/ui/Loading/Loading';
import Bots from '@pages/bots';

// const Main = lazy(() => import('@pages/main'));
const Category = lazy(() => import('@pages/category'));
const Users = lazy(() => import('@pages/users'));
// const Bots = lazy(() => import('@pages/bots'));
const Servers = lazy(() => import('@pages/servers'));
// const Login = lazy(() => import('@pages/login'));
const Profile = lazy(() => import('@pages/profile'));

const withSuspense = (element: React.ReactNode) => (
  <Suspense fallback={<Loading/>}>{element}</Suspense>
);

export const router = createBrowserRouter([
  {
    path: RouterPath.ROOT,
    element: <App />,
    children: [
      // { path: RouterPath.LOGIN, element: withSuspense(<Login />) },

      {
        element: <RequireAuth />,
        children: [
          // { index: true, element: withSuspense(<Main />) }, 
          // { path: '/loading', element: withSuspense(<Loading />) },
          { path: RouterPath.CATEGORY, element: withSuspense(<Category />) },
          { path: RouterPath.USERS, element: withSuspense(<Users />) },
          { path: RouterPath.BOTS, element: withSuspense(<Bots />) },
          { path: RouterPath.SERVERS, element: withSuspense(<Servers />) },
          { path: RouterPath.ROOT, element: withSuspense(<Profile />) },
        ],
      },

      { path: '*', element: <Navigate to={RouterPath.ROOT} replace /> },
    ],
  },
]);
