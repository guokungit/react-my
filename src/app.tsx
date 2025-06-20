import { useRoutes, Link } from 'react-router-dom';
import routers from './routers/index.js';
import React from 'react';
function App() {
  const element = useRoutes(routers);
  return (
    <div>
      <nav>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
      </nav>
      {element}
    </div>
  );
}

export default App;
