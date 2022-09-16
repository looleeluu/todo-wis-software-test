import React from 'react';
import { createRoot } from 'react-dom/client';
import { RootContext, store } from '@common/context';
import { App } from './App';

const container = document.getElementById('app');

if (!container) {
  throw new Error('Не найден элемент для монтирования приложения');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RootContext.Provider value={store}>
      <App />
    </RootContext.Provider>
  </React.StrictMode>,
);
