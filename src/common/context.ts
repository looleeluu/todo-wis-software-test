import { createContext } from 'react';
import { services } from '../api';
import { RootStore } from '../store';

export const RootContext = createContext<RootStore | undefined>(undefined);

export const store = new RootStore(services);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.store = store;
