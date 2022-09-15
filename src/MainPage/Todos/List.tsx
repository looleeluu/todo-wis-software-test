import React from 'react';
import { observer } from 'mobx-react-lite';
import { TodoItem } from 'api/types';
import { StatusContainer, ListContainer, Title } from '../../ui';
import { ListItem } from './ListItem';
import { useStore } from '../../common/hooks';

interface ListProps {
  list: TodoItem[] | null;
}

export const List: React.FC<ListProps> = observer(({ list }) => {
  const { controller, todos } = useStore();

  if (!list) {
    return (
      <StatusContainer>
        <Title>List not loaded</Title>
      </StatusContainer>
    );
  }

  return (
    <ListContainer>
      {list.map((item) => (
        <ListItem
          remove={todos.remove}
          controller={controller}
          item={item}
          key={item.id}
        />
      ))}
    </ListContainer>
  );
});
