import React, { lazy, Suspense } from 'react';

const LazyLoad = (Component) => {
  const LazyComponent = lazy(Component);

  // 创建一个包装组件并设置displayName
  const WrappedComponent = (props) => (
    <Suspense fallback={<div>加载中...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );

  // 设置显示名称，使用原始组件名加上"Lazy"前缀
  WrappedComponent.displayName = `Lazy${Component.displayName || Component.name || 'Component'}`;

  return WrappedComponent;
};

export default LazyLoad;
