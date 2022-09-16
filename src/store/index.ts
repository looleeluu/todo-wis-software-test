/* eslint-disable @typescript-eslint/lines-between-class-members */
import { Services } from '@api';
import { TodoStore } from './Todo';
import { ControllerStore } from './controller';

export class RootStore {
  todos: TodoStore;
  controller: ControllerStore;

  constructor(services: Services) {
    this.todos = new TodoStore(services);
    this.controller = new ControllerStore();
  }
}
