import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterDOM from "./services/router/routerDom";
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
  );
  root.render(
      <RouterDOM />
  );