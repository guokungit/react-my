import { Navigate, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

const AuthComponent = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token && location.pathname !== '/login') {
      // 没有token且不是登录页面，重定向到登录页面
      <Navigate to="/" replace />;
    }
    return () => {
      // 清理函数，如果需要的话
    };
  }, [token, location]);

  return children;
};

export default AuthComponent;
