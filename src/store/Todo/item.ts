import { observable, makeObservable, computed, runInAction } from 'mobx';
import { TodoItem } from '../../api/types';

export class TodoItemStore implements TodoItem {
  private _id: string;

  private _name: string;

  private _description: string;

  @observable private _completed: boolean;

  constructor(item: TodoItem) {
    this._id = item.id;
    this._name = item.name;
    this._description = item.description;
    this._completed = item.completed;

    makeObservable(this);
  }

  @computed
  get id() {
    return this._id;
  }

  @computed
  get name() {
    return this._name;
  }

  @computed
  get description() {
    return this._description;
  }

  @computed
  get completed() {
    return this._completed;
  }

  set completed(value: boolean) {
    runInAction(() => {
      this._completed = value;
    });
  }

  @computed
  get item(): TodoItem {
    return {
      id: this._id,
      name: this._name,
      description: this._description,
      completed: this._completed,
    };
  }
}
