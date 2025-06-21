import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './app.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
