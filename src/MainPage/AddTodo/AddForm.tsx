import React, { useEffect } from 'react';
import { useStore } from '../../common/hooks';
import { Button, FormContainer, FormItem, Input } from '../../ui';

export const AddForm: React.FC = () => {
  const { controller, todos } = useStore();
  const { itemCreator } = todos;

  useEffect(() => {
    itemCreator.createNewItem();
  }, [itemCreator]);

  const handleSubmit = () => {
    if (!itemCreator.newItem) {
      throw new Error('Отсутствует элемент');
    }

    todos.add(itemCreator.newItem);
    itemCreator.clear();
    controller.addButtonState = 'button';
  };

  const handleCancel = () => {
    itemCreator.clear();
    controller.addButtonState = 'button';
  };

  return (
    <FormContainer onSubmit={() => handleSubmit()}>
      <FormItem>
        <span>name</span>
        <Input
          value={itemCreator.name}
          type="text"
          onChange={(e) => {
            itemCreator.name = e.target.value;
          }}
        />
      </FormItem>

      <FormItem>
        <span>description</span>
        <Input
          value={itemCreator.description}
          type="text"
          onChange={(e) => {
            itemCreator.description = e.target.value;
          }}
        />
      </FormItem>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Button variant="primary" type="submit">
          Add todo
        </Button>
        <Button variant="default" onClick={() => handleCancel()}>
          Cancel
        </Button>
      </div>
    </FormContainer>
  );
};
