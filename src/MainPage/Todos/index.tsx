import React from 'react';
import { TodoItem } from '@api/types';
import { AddTodo } from '../AddTodo';
import { Filter } from './Filter';
import { List } from './List';

interface TodosProps {
  list: TodoItem[] | null;
}

export const Todos: React.FC<TodosProps> = ({ list }) => (
  <>
    <Filter />
    <List list={list} />
    {list && <AddTodo />}
  </>
);
