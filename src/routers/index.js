import AuthComponent from './authComponent.js';
import { Navigate } from 'react-router-dom';
import LazyLoad from './lazyLoad.js';
import React from 'react';

// const Home = LazyLoad(() => import('../pages/home/index.tsx'));
const About = LazyLoad(() => import('../pages/about/index.tsx'));
const Counter = LazyLoad(() => import('../components/Counter/Counter.jsx'));

const routers = [
  {
    path: '/',
    element: <Counter />,
  },
  {
    path: '/about',
    element: (
      <AuthComponent>
        <About />
      </AuthComponent>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" />, // 重定向到首页
  },
];

export default routers;
