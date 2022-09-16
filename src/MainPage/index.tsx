import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@common/hooks';
import { StatusContainer, Title } from '@ui';
import { Todos } from './Todos';
import { Card } from './Card';

export const MainPage: React.FC = observer(() => {
  const { todos, controller } = useStore();
  const { activeCard, viewState } = controller;

  if (viewState === 'list') {
    return (
      <>
        <Title>
          <h2>Todo List</h2>
        </Title>
        <Todos list={todos.list} />
      </>
    );
  }

  if (viewState === 'card' && activeCard) {
    return <Card item={activeCard} controller={controller} />;
  }

  return (
    <StatusContainer>
      <Title>Неизвестный тип отображения</Title>
    </StatusContainer>
  );
});
