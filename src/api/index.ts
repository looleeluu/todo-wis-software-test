import { Todo } from './todo';

export const services = {
  todo: new Todo(),
};

export type Services = typeof services;
