import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterDOM from "./services/router/routerDom";
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
  );
  root.render(
    <QueryClientProvider client={queryClient}>
        <RouterDOM />
    </QueryClientProvider>
   
  );