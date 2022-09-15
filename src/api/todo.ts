import { getAPIClient, APIClient } from './api-client';
import { TodoResponse, TodoItem } from './types';

export class Todo {
  private _apiClient: APIClient;

  constructor(apiClient: APIClient = getAPIClient()) {
    this._apiClient = apiClient;
  }

  async list() {
    const result = await this._apiClient.get<TodoResponse>('list');

    return result.data;
  }

  async update(data: TodoItem[]) {
    await this._apiClient.post<TodoItem[]>('update', { data });
  }
}
