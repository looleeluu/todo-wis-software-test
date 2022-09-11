import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('app');

if (!container) {
  throw new Error('Не найден элемент для монтирования приложения');
}

const root = createRoot(container);
root.render(<App />);
