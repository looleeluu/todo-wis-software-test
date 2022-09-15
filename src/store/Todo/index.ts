import { observable, computed, runInAction, makeObservable } from 'mobx';
import { MetaData, TodoItem } from '../../api/types';
import { Services } from '../../api';
import { Filter } from './filter';
import { TodoItemStore } from './item';
import { ItemCreator } from './creator';

export class TodoStore {
  private _services: Services;

  @observable private _list: MetaData<TodoItemStore[]> = {
    isLoading: false,
    error: null,
    value: null,
  };

  @observable private _filter: Filter;

  @observable private _itemCreator: ItemCreator;

  constructor(
    services: Services,
    filter: Filter = new Filter(),
    itemCreator: ItemCreator = new ItemCreator(),
  ) {
    this._services = services;
    this._filter = filter;
    this._itemCreator = itemCreator;
    this._getList();

    makeObservable(this);
  }

  @computed
  get itemCreator() {
    return this._itemCreator;
  }

  @computed
  get filter() {
    return this._filter;
  }

  @computed
  get list() {
    return this._createListByFilter();
  }

  @computed
  get error() {
    return this._list.error;
  }

  @computed
  get isLoading() {
    return this._list.isLoading;
  }

  add(todo: TodoItem) {
    const item = new TodoItemStore(todo);
    runInAction(() => {
      if (!this._list.value) {
        throw new Error('Отсутствует список');
      }

      this._list.value.push(item);
    });
    this._update();
  }

  remove = (id: string) => {
    if (!this._list.value) {
      throw new Error('Отсутствует список');
    }

    const list = this._list.value;
    runInAction(() => {
      this._list.value = list.filter((item) => item.id !== id);
    });
    this._update();
  };

  private _createListByFilter() {
    if (!this._list.value) {
      return null;
    }

    switch (this._filter.currentFilter) {
      case 'all':
        return this._list.value;
      case 'completed':
        return this._list.value.filter((item) => item.completed === true);
      case 'uncompleted':
        return this._list.value.filter((item) => item.completed === false);
      default:
        throw new Error('Неизвестый тип фильтрации');
    }
  }

  private async _getList() {
    runInAction(() => {
      this._list.error = null;
    });
    try {
      const todos = await this._loadTodoList();

      if (!todos) {
        throw new Error('Не удалось получить список');
      }

      runInAction(() => {
        this._list.value = todos.map((todo) => new TodoItemStore(todo));
      });
    } catch (e: unknown) {
      runInAction(() => {
        if (e instanceof Error) {
          this._list.error = e;
        }
      });
    }
  }

  private async _loadTodoList() {
    runInAction(() => {
      this._list.isLoading = true;
      this._list.error = null;
    });
    try {
      const response = await this._services.todo.list();

      return response.todos;
    } catch (e: unknown) {
      runInAction(() => {
        if (e instanceof Error) {
          throw new Error('Не удалось загрузить список');
        }
      });
      return undefined;
    } finally {
      runInAction(() => {
        this._list.isLoading = false;
      });
    }
  }

  private async _update() {
    runInAction(() => {
      this._list.isLoading = true;
      this._list.error = null;
    });
    try {
      if (!this._list.value) {
        throw new Error('Отсутствует список');
      }
      await this._services.todo.update(
        this._list.value.map((todo) => todo.item),
      );
    } catch (e: unknown) {
      runInAction(() => {
        if (e instanceof Error) {
          this._list.error = e;
        }
      });
    } finally {
      runInAction(() => {
        this._list.isLoading = false;
      });
    }
  }
}
