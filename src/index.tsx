import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { QueryClient, QueryClientProvider } from 'react-query';
import LoginProvider from './context/LoginContext';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
      <LoginProvider>
        <App />
      </LoginProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);


