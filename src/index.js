import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './app.tsx';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
if (!rootElement) {
  throw new Error('Root element not found');
} else {
  rootElement.render(
    <Router>
      <App />
    </Router>
  );
}
