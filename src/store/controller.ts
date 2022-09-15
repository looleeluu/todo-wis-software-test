import { TodoItem } from 'api/types';
import { computed, makeObservable, observable, runInAction } from 'mobx';
import { ViewState, AddButtonState } from './types';

export class ControllerStore {
  @observable private _viewState: ViewState;

  @observable private _addButtonState: AddButtonState;

  @observable private _activeCard: TodoItem | null = null;

  constructor() {
    this._addButtonState = 'button';
    this._viewState = 'list';
    makeObservable(this);
  }

  @computed
  get addButtonState() {
    return this._addButtonState;
  }

  set addButtonState(value: AddButtonState) {
    runInAction(() => {
      this._addButtonState = value;
    });
  }

  @computed
  get viewState() {
    return this._viewState;
  }

  set viewState(value: ViewState) {
    runInAction(() => {
      this._viewState = value;
    });
  }

  @computed
  get activeCard() {
    return this._activeCard;
  }

  set activeCard(card: TodoItem | null) {
    runInAction(() => {
      this._activeCard = card;
    });
  }
}
