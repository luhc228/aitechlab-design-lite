import React from 'react';

import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';

const UserLogin = React.lazy(() => import('@/pages/UserLogin'));
const Dashboard = React.lazy(() => import('@/pages/Dashboard'));
const NotFound = React.lazy(() => import('@/pages/Exception/NotFound'));

const routerConfig = [
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '/login',
        component: UserLogin,
      },
      {
        path: '/',
        redirect: '/user/login',
      },
      {
        component: NotFound,
      },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/dashboard',
        component: Dashboard,
      },
      {
        path: '/',
        redirect: '/dashboard',
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
