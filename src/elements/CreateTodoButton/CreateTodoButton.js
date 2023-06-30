import React from 'react';
import { TodoContext } from '../../TodoContext/TodoContext';

function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  return (
    <button className='first-button' onClick={() => {setOpenModal(!openModal)}} >+</button>
  );
}

export { CreateTodoButton };
