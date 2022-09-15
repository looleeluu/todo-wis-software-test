import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../common/hooks';
import { AddButton } from './AddButton';
import { AddForm } from './AddForm';

export const AddTodo: React.FC = observer(() => {
  const { controller } = useStore();
  const { addButtonState } = controller;

  if (addButtonState === 'button') {
    return <AddButton controller={controller} />;
  }

  if (addButtonState === 'form') {
    return <AddForm />;
  }

  return null;
});
