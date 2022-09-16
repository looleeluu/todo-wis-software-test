import React from 'react';
import { observer } from 'mobx-react-lite';
import { nanoid } from 'nanoid';
import { useStore } from '@common/hooks';
import { Select } from '@ui';

export const Filter: React.FC = observer(() => {
  const { todos } = useStore();
  const { filter } = todos;

  return (
    <Select
      value={filter.currentFilter}
      onChange={(e) => {
        todos.filter.currentFilter = e.target.value;
      }}
    >
      {filter.list.map(({ value, label }) => (
        <option key={nanoid()} value={value}>
          {label}
        </option>
      ))}
    </Select>
  );
});
