import { computed, makeObservable, observable, runInAction } from 'mobx';

type FilterValue = 'all' | 'completed' | 'uncompleted';
type FilterLabel = 'All' | 'Completed' | 'Uncompleted';

type FilterOption = {
  value: FilterValue;
  label: FilterLabel;
};

const DEFAULT_OPTIONS: FilterOption[] = [
  {
    value: 'all',
    label: 'All',
  },
  { value: 'completed', label: 'Completed' },
  { value: 'uncompleted', label: 'Uncompleted' },
];

export class Filter {
  readonly list: FilterOption[] = DEFAULT_OPTIONS;

  @observable private _currentFilter: FilterValue = 'all';

  constructor() {
    makeObservable(this);
  }

  @computed
  get currentFilter() {
    return this._currentFilter;
  }

  set currentFilter(newValue: string) {
    if (this._isValidFilter(newValue)) {
      runInAction(() => {
        this._currentFilter = newValue;
      });
    }
  }

  private _isValidFilter(newValue: string): newValue is FilterValue {
    const valueKeys = this.list.map(({ value }) => value as string);
    if (valueKeys.includes(newValue)) {
      return true;
    }

    return false;
  }
}
