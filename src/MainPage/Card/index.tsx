import React from 'react';
import { observer } from 'mobx-react-lite';
import { ControllerStore } from '@store/controller';
import { TodoItem } from '@api/types';
import { Button, CardContainer, Divider, ItemTitle } from '@ui';

interface CardProps {
  item: TodoItem;
  controller: ControllerStore;
}

export const Card: React.FC<CardProps> = observer(({ item, controller }) => {
  const { id, name, description, completed } = item;

  const handleBackToList = () => {
    controller.activeCard = null;
    controller.viewState = 'list';
  };

  return (
    <CardContainer>
      <ItemTitle>{name}</ItemTitle>

      <Divider />

      <div style={{ flexGrow: 1 }}>
        <p>{description}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <label htmlFor={id}>
          <input
            id={id}
            type="checkbox"
            checked={completed}
            onChange={() => {
              item.completed = !completed;
            }}
          />
          Completed
        </label>
      </div>

      <Divider />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="primary" onClick={() => handleBackToList()}>
          Back to list
        </Button>
      </div>
    </CardContainer>
  );
});
