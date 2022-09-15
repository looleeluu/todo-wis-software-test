import { useContext } from 'react';
import { RootContext } from '../context';

export const useStore = () => {
  const store = useContext(RootContext);

  if (!store) throw new Error('Хранилище не может быть не определено');

  return store;
};
