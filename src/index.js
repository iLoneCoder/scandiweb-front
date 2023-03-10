import React from 'react';
import ReactDOM from 'react-dom/client';
import "./main.scss";
import App from './App';
import { ProductContextProvider } from './store/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </React.StrictMode>
);


