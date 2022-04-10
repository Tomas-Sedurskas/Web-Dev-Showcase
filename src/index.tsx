import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'styles/index.scss';

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

const container = document.getElementById('root');

if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);

root.render(app);
