export interface MetaData<T> {
  value: T | null;
  error: Error | null;
  isLoading: boolean;
}

export interface TodoItem {
  id: string;
  name: string;
  description: string;
  completed: boolean;
}

export interface TodoResponse {
  todos: TodoItem[];
}
