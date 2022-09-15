import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';
import { nanoid } from 'nanoid';
import { TodoItem } from '../../api/types';

export class ItemCreator {
  @observable private _newItem: TodoItem | null = null;

  constructor() {
    makeObservable(this);
  }

  @computed
  get newItem() {
    return this._newItem;
  }

  @action
  clear() {
    this._newItem = null;
  }

  @action
  createNewItem() {
    this._newItem = {
      id: nanoid(),
      name: '',
      description: '',
      completed: false,
    };
  }

  set name(value: string) {
    runInAction(() => {
      if (!this._newItem) {
        throw new Error(
          'Элемент, который мы пытаемся отредактировать отсутствует',
        );
      }
      this._newItem.name = value;
    });
  }

  set description(value: string) {
    runInAction(() => {
      if (!this._newItem) {
        throw new Error(
          'Элемент, который мы пытаемся отредактировать отсутствует',
        );
      }

      this._newItem.description = value;
    });
  }
}
