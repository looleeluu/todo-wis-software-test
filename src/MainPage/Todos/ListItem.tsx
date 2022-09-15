import React from 'react';
import { observer } from 'mobx-react-lite';
import { ControllerStore } from '../../store/controller';
import { TodoItem } from '../../api/types';
import { ItemContainer, ItemData, CrossContainer, ItemTitle } from '../../ui';
import { Cross } from '../../assets/Icons';

interface ListItemProps {
  controller: ControllerStore;
  item: TodoItem;
  remove(id: string): void;
}

export const ListItem: React.FC<ListItemProps> = observer(({ item, controller, remove }) => {
  const { id, name, description, completed } = item;

  const handleItemClick = () => {
    controller.activeCard = item;
    controller.viewState = 'card';
  };

  const handleCross = (deletedId: string) => () => {
    remove(deletedId);
  };

  return (
    <ItemContainer completed={completed}>
      <input
        id={id}
        type="checkbox"
        checked={completed}
        onChange={() => {
          item.completed = !completed;
        }}
      />
      <ItemData onDoubleClick={() => handleItemClick()}>
        <ItemTitle>{name}</ItemTitle>
        <p>{description}</p>
      </ItemData>
      <CrossContainer onClick={handleCross(id)}>
        <Cross />
      </CrossContainer>
    </ItemContainer>
  );
});
