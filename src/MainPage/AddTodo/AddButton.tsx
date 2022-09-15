import React from 'react';
import { ControllerStore } from '../../store/controller';
import { Button } from '../../ui';

interface AddButtonProps {
  controller: ControllerStore;
}

export const AddButton: React.FC<AddButtonProps> = ({ controller }) => {
  const handleClick = () => {
    controller.addButtonState = 'form';
  };

  return (
    <Button variant="primary" onClick={() => handleClick()}>
      Add Todo
    </Button>
  );
};
